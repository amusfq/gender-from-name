declare module "gender-from-name" {
    export function detect(name: string, lang?: 'id' | 'en' | 'it' | 'es'| 'fr'): string;
}
