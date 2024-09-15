import Image from "next/image";
import { Search } from "@/lib/component/Search";
import { getRandomPhotos } from "@/lib/unsplah";
import { headers } from "next/headers";

const Home = async () => {
    const randomPhotos = await getRandomPhotos();
    const hostname: string = headers().get('x-forwarded-host') || '';
    return (
        <div>
            <Search randomPhotos={randomPhotos} hostname={hostname} />
        </div>
    );
}

export default Home;