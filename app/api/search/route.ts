import { searchPhotos } from "@/lib/unsplah";

export async function POST(request: Request) {
    const { query }: { query: unknown } = await request.json();
    if (!query || typeof query !== 'string') {
        const response = new Response('no query', { status: 400 });
    }
    const searchPhotosResponse = await searchPhotos(query as string);
    //console.log(searchPhotosResponse);
    return new Response(
        JSON.stringify(searchPhotosResponse),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}