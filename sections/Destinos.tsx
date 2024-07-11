import { DEFAULT_PROPS_PACKAGE } from "../sections/PacotesEDestinos.tsx"
import Image from "apps/website/components/Image.tsx";

export function Destinos() {
    const { destinos } = DEFAULT_PROPS_PACKAGE
    return (
        <div>
            {destinos?.map((destino) => (
                <Link
                    href={`/${destino.slug}`}
                >
                    <Image
                        src={destino.image}
                        width={300}
                        height={300}
                    />
                    <h2>{destino.title}</h2>
                    <p>{destino.shortDescription?.shortDescription}</p>
                </Link>
            ))}
        </div>
    )
}