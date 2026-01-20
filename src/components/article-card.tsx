'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ArticleInfo } from '@/lib/articles-data';

interface ArticleCardProps {
    article: ArticleInfo;
}

export function ArticleCard({ article }: ArticleCardProps) {
    const width = 500;
    const height = 700;

    return (
        <a href={article.file} target="_blank" rel="noopener noreferrer" className="block group">
            <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
                <CardHeader className="p-0">
                    <div className="relative w-full overflow-hidden">
                        <Image
                            src={article.imageUrl}
                            alt={article.title}
                            width={width}
                            height={height}
                            className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-4">
                    <CardTitle className="font-headline text-lg">{article.title}</CardTitle>
                    <CardDescription className="mt-1 text-sm">{article.description}</CardDescription>
                </CardContent>
            </Card>
        </a>
    );
}
