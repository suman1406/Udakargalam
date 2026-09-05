'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ArticleInfo } from '@/lib/articles-data';
import { ExternalLink } from 'lucide-react';
import { useLocale } from '@/hooks/use-locale';

interface ArticleCardProps {
    article: ArticleInfo;
}

export function ArticleCard({ article }: ArticleCardProps) {
    const { t } = useLocale();
    const width = 500;
    const height = 700;

    return (
            <Card className="group h-full overflow-hidden bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
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
                <CardContent className="flex h-full flex-col gap-4 p-5">
                    <CardTitle className="font-headline text-lg">{article.title}</CardTitle>
                    <p className="text-sm leading-6 text-muted-foreground">{article.description}</p>
                    <a
                        href={article.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        {t('common.readPdf')} <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                </CardContent>
            </Card>
    );
}
