export interface Spaceflight {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    id: number;
    title: string;
    authors: Author[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: Date;
    updated_at: Date;
    featured: boolean;
    launches: Launch[];
    events: any[];
}

export interface Author {
    name: string;
    socials: Socials | null;
}

export interface Socials {
    x: string;
    youtube: string;
    instagram: string;
    linkedin: string;
    mastodon: string;
    bluesky: string;
}

export interface Launch {
    launch_id: string;
    provider: string;
}

export interface SingleArticle {
    id: number;
    title: string;
    authors: Author[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: Date;
    updated_at: Date;
    featured: boolean;
    launches: Launch[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    events: any[];
}

export interface Author {
    name: string;
    socials: Socials | null;
}

export interface Launch {
    launch_id: string;
    provider: string;
}
