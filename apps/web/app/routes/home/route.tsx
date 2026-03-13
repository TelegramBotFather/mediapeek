import { buttonVariants } from '@mediapeek/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@mediapeek/ui/components/card';
import { cn } from '@mediapeek/ui/lib/utils';
import { Link } from 'react-router';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { TrademarkNotice } from '~/components/media-view/trademark-notice';
import { MEDIA_CONSTANTS } from '~/lib/media/constants';

import type { Route } from './+types/route';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Home - MediaPeek' },
    {
      name: 'description',
      content:
        'Inspect media metadata from URL sources in a clear and reliable interface.',
    },
  ];
};

const features = [
  {
    id: 'edge-analysis',
    title: 'Edge Analysis',
    summary:
      'Fetches only necessary data segments without downloading the entire file.',
    points: [
      'Optimized for byte-range requests to reduce transfer and wait time.',
      'Built for large assets where full downloads are wasteful.',
      'Processing runs on edge infrastructure close to users.',
    ],
  },
  {
    id: 'archive-extraction',
    title: 'Archive Extraction',
    summary:
      'Transparently unpacks media from common archives while preserving file context.',
    points: [
      'ZIP support: Stored and DEFLATE-compressed archives.',
      'TAR support: Standard tar archives including @LongLink extended headers.',
      'Displays archive name alongside inner filename for clear provenance.',
    ],
  },
  {
    id: 'supported-sources',
    title: 'Supported Sources',
    summary:
      'Works with modern remote media sources used by developers and everyday users.',
    points: [
      'Web servers: HTTP/HTTPS URLs with byte-range optimization.',
      'Google Drive: Public files and folders.',
    ],
  },
  {
    id: 'secure-sharing',
    title: 'Secure Sharing',
    summary: 'Share results with end-to-end encryption through PrivateBin.',
    points: ['Sharing flow is designed for privacy-first collaboration.'],
  },
  {
    id: 'output-formats',
    title: 'Output Formats',
    summary:
      'Export metadata in multiple formats for analysis, automation, or archival.',
    points: [
      'Supported outputs: Object, JSON, Text, HTML, XML.',
      'Readable formats help non-technical users review file properties.',
    ],
  },
] as const;

const badges = [
  'dolby-vision',
  'dolby-atmos',
  'hdr',
  'hdr10-plus',
  '4k',
  'hd',
  'imax',
  'dts',
  'dts-x',
  'hi-res-lossless',
  'apple-digital-master',
  'aac',
  'cc',
  'sdh',
] as const;

const trademarkBadges = [
  MEDIA_CONSTANTS.BADGES.DOLBY_VISION,
  MEDIA_CONSTANTS.BADGES.DOLBY_ATMOS,
  MEDIA_CONSTANTS.BADGES.DOLBY_AUDIO,
  MEDIA_CONSTANTS.BADGES.IMAX,
  MEDIA_CONSTANTS.BADGES.DTS,
  MEDIA_CONSTANTS.BADGES.DTS_X,
  MEDIA_CONSTANTS.BADGES.HDR10_PLUS,
  MEDIA_CONSTANTS.BADGES.AV1,
];

const METADATA_ENGINE = {
  mediainfoJs: {
    version: '0.3.7',
    url: 'https://mediainfo.js.org/',
  },
  mediaInfoLib: {
    version: '25.10',
    url: 'https://github.com/MediaArea/MediaInfoLib',
  },
} as const;

export default function HomeRoute() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-1">
        <section className="from-muted/35 to-background bg-linear-to-b">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-12 sm:py-24">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32">
              <img
                src="/badges/icon-light.webp"
                alt="MediaPeek Logo"
                className="hidden h-full w-full object-contain dark:block"
              />
              <img
                src="/badges/icon-dark.webp"
                alt="MediaPeek Logo"
                className="h-full w-full object-contain dark:hidden"
              />
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              MediaPeek
            </h1>
            <p className="text-muted-foreground mt-5 max-w-3xl text-lg leading-relaxed sm:text-xl">
              Inspect media metadata from URL sources in a clear and reliable
              interface.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/app"
                viewTransition
                className={cn(buttonVariants({ size: 'lg' }), 'min-w-40')}
              >
                Open App
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pt-0 pb-16 sm:px-12 sm:pb-20">
          <div className="from-muted/30 to-background isolate overflow-hidden rounded-3xl border bg-linear-to-b p-2 shadow-sm sm:p-3">
            <div className="bg-background overflow-hidden rounded-2xl border">
              <iframe
                src="/preview"
                title="MediaPeek Preview"
                className="h-[920px] w-full bg-transparent"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-12 sm:pb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Key Features
            </h2>
            <p className="text-muted-foreground mt-3 max-w-3xl text-lg leading-relaxed">
              Clean, high-density feature summaries with technical depth built
              directly into the layout.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature, idx) => (
              <Card
                key={feature.id}
                className={cn(
                  'border-border/70 bg-background/90',
                  idx === 0 && 'md:col-span-2',
                )}
              >
                <CardHeader className="border-b pb-6">
                  <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
                    Feature {String(idx + 1).padStart(2, '0')}
                  </p>
                  <CardTitle
                    className={cn(
                      'tracking-tight',
                      idx === 0 ? 'text-3xl' : 'text-2xl',
                    )}
                  >
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div
                    className={cn(
                      'grid gap-3',
                      idx === 0 ? 'sm:grid-cols-3' : 'sm:grid-cols-1',
                    )}
                  >
                    {feature.points.map((point) => (
                      <div
                        key={point}
                        className="bg-muted/35 rounded-xl border px-4 py-3 text-sm leading-relaxed"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-12 sm:pb-20">
          <Card className="border-border/70 from-muted/25 to-background bg-linear-to-b">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Format badges
              </CardTitle>
              <CardDescription className="max-w-3xl text-base leading-relaxed">
                Carefully extracted badge assets inspired by Apple TV and other
                platforms for consistent, high-fidelity media labeling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {badges.map((badge) => (
                  <div
                    key={badge}
                    className="bg-background/70 flex items-center justify-center rounded-xl border p-4"
                  >
                    <img
                      src={`/badges/${badge}.svg`}
                      alt={`${badge} badge`}
                      className="h-6 w-auto object-contain grayscale dark:invert"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-12 sm:pb-20">
          <Card className="border-border/70 from-muted/20 to-background bg-linear-to-b">
            <CardHeader className="border-b pb-5">
              <div className="flex items-center gap-4">
                <img
                  src="/badges/mediainfo.svg"
                  alt="MediaInfo Logo"
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl font-semibold tracking-tight">
                    Metadata Engine
                  </CardTitle>
                  <CardDescription className="max-w-3xl text-base leading-relaxed">
                    <a
                      href={METADATA_ENGINE.mediainfoJs.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      mediainfo.js v{METADATA_ENGINE.mediainfoJs.version}
                    </a>{' '}
                    /{' '}
                    <a
                      href={METADATA_ENGINE.mediaInfoLib.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      MediaInfoLib v{METADATA_ENGINE.mediaInfoLib.version}
                    </a>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                MediaPeek uses mediainfo.js as the metadata analysis layer. The
                library runs through WebAssembly and is based on MediaInfoLib.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Analysis by mediainfo.js, a WebAssembly port of MediaInfo
                library, Copyright (c) 2002-2026 MediaArea.net SARL.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-12 sm:pb-20">
          <div className="from-muted/35 via-background to-muted/15 border-border/70 overflow-hidden rounded-[2rem] border bg-linear-to-br">
            <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                    Built in public, maintained on GitHub.
                  </h2>
                  <p className="text-muted-foreground max-w-2xl text-base leading-relaxed sm:text-lg">
                    MediaPeek is open source. Browse the repository on GitHub,
                    review issues, track releases, and follow the project as it
                    evolves.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href="https://github.com/DG02002/mediapeek"
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: 'lg', variant: 'outline' }),
                      'min-w-48',
                    )}
                  >
                    View Source Code
                  </a>
                </div>
              </div>

              <div className="flex items-start justify-start lg:justify-end">
                <div
                  className="inline-flex"
                  data-testid="github-brand-lockup"
                >
                  <img
                    src="/brand/github/GitHub_Lockup_Black_Clearspace.svg"
                    alt=""
                    aria-hidden="true"
                    className="h-8 w-auto object-contain dark:hidden"
                  />
                  <img
                    src="/brand/github/GitHub_Lockup_White_Clearspace.svg"
                    alt=""
                    aria-hidden="true"
                    className="hidden h-8 w-auto object-contain dark:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-12 sm:pb-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Trademark & Attribution Notices
          </h2>
          <div className="text-muted-foreground mt-4 space-y-3 text-xs leading-relaxed">
            <p>
              Apple Services badges are sourced from Apple TV and Apple Music.
            </p>
          </div>
          <TrademarkNotice badges={trademarkBadges} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
