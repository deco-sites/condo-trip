import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";

interface ShortDescription {
    shortDescription?: HTMLWidget
    maxLength: number
}

interface Destino {
    title?: string
    shortDescription?: ShortDescription
    description?: HTMLWidget
    price?: string
    image?: ImageWidget
    comments?: HTMLWidget
    slug?: string
}

export interface PropsDestinos {
    destinos?: Destino[]
}

export const DEFAULT_PROPS_PACKAGE: PropsDestinos = {
    destinos: [
        {
            title: "Rio de Janeiro",
            shortDescription: {
                shortDescription: "Descrição curta do destino",
                maxLength: 100
            },
            description: "Descrição longa do destino",
            price: "1000",
            image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11359/6e477d54-3ba9-45b9-8c65-f367678bd66c",
            comments: "Viagem para 18 pessoas",
            slug: "rio-de-janeiro"
        },
        {
            title: "Rio de Janeiro",
            shortDescription: {
                shortDescription: "Descrição curta do destino",
                maxLength: 100
            },
            description: "Descrição longa do destino",
            price: "1000",
            image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11359/6e477d54-3ba9-45b9-8c65-f367678bd66c",
            comments: "Viagem para 18 pessoas",
            slug: "rio-de-janeiro"
        },
        {
            title: "Rio de Janeiro",
            shortDescription: {
                shortDescription: "Descrição curta do destino",
                maxLength: 100
            },
            description: "Descrição longa do destino",
            price: "1000",
            image: "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/11359/6e477d54-3ba9-45b9-8c65-f367678bd66c",
            comments: "Viagem para 18 pessoas",
            slug: "rio-de-janeiro"
        }
    ]
}