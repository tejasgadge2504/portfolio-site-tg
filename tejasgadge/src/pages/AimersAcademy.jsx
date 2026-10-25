import {
  BookOpen,
  ExternalLink,
  FolderOpen,
  PlayCircle,
  Video,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import academyData from "../data/AimersAcademy.json";

function getYouTubeEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];

      return id
        ? `https://www.youtube-nocookie.com/embed/${id}`
        : null;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (parsed.pathname === "/watch") {
        const id = parsed.searchParams.get("v");

        return id
          ? `https://www.youtube-nocookie.com/embed/${id}`
          : null;
      }

      const match = parsed.pathname.match(
        /^\/(?:embed|shorts|live)\/([^/?]+)/
      );

      return match
        ? `https://www.youtube-nocookie.com/embed/${match[1]}`
        : null;
    }

    return null;
  } catch {
    return null;
  }
}

function VideoCard({ video }) {
  const embedUrl = getYouTubeEmbedUrl(video.url);

  return (
    <Card className="group min-w-0 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden bg-muted">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={video.title}
            className="absolute inset-0 h-full w-full"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
            <PlayCircle className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Add a valid YouTube video URL in the JSON file.
            </p>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Video className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

          <div className="min-w-0">
            <h4 className="font-semibold leading-snug">
              {video.title}
            </h4>

            {video.url && (
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 text-sm text-primary hover:underline"
              >
                Watch on YouTube
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function VideoSection({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 space-y-8"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10">
            <PlayCircle className="h-6 w-6 text-primary" />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {section.title}
            </h2>

            {section.description && (
              <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                {section.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {section.topics?.map((topic) => (
        <section
          key={topic.id}
          id={`topic-${topic.id}`}
          className="scroll-mt-28 space-y-4"
        >
          <div className="border-l-2 border-primary pl-4">
            <h3 className="text-lg font-semibold sm:text-xl">
              {topic.title}
            </h3>

            {topic.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {topic.description}
              </p>
            )}
          </div>

          {topic.videos?.length ? (
            <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {topic.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Videos will be added soon.
            </p>
          )}
        </section>
      ))}
    </section>
  );
}

function getDriveFolderUrl(folder) {
  if (folder.url) return folder.url;

  if (folder.folderId) {
    return `https://drive.google.com/drive/folders/${folder.folderId}`;
  }

  return null;
}


function FolderCard({ folder }) {
  const folderUrl = getDriveFolderUrl(folder);

  return (
    <Card className="group flex h-full min-w-0 flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="min-w-0 space-y-3 p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="grid shrink-0 place-items-center rounded-lg bg-primary/10 p-2">
            <FolderOpen className="h-5 w-5 text-primary" />
          </div>

          <Badge variant="outline" className="shrink-0 text-xs">
            Drive
          </Badge>
        </div>

        <CardTitle className="break-words text-sm leading-snug sm:text-base">
          {folder.title}
        </CardTitle>

        {folder.description && (
          <CardDescription className="break-words text-xs sm:text-sm">
            {folder.description}
          </CardDescription>
        )}
      </CardHeader>

      {folderUrl && (
        <CardContent className="mt-auto p-3 pt-0 sm:p-4 sm:pt-0">
          <Button
            asChild
            size="sm"
            className="w-full min-w-0 rounded-lg"
          >
            <a
              href={folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Open</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
            </a>
          </Button>
        </CardContent>
      )}
    </Card>
  );
}

function NotesSection({ section }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {section.title}
          </h2>

          {section.description && (
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              {section.description}
            </p>
          )}
        </div>
      </div>

      {section.folders?.length ? (
        <div className="grid min-w-0 grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {section.folders.map((folder) => (
            <FolderCard key={folder.id} folder={folder} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-8 text-center text-muted-foreground">
            Notes will be added soon.
          </CardContent>
        </Card>
      )}
    </section>
  );
}



export default function Page2() {
  const {
    academyName,
    description,
    sections = [],
  } = academyData;

  return (
    <main className="mx-auto w-full max-w-7xl space-y-12 px-4 py-6 pb-32 sm:px-6 sm:py-10 md:pb-12 lg:px-8">
      {/* Academy header */}
      <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background">
        <CardHeader className="relative z-10 p-6 sm:p-8">
          <Badge variant="secondary" className="mb-2 w-fit">
                <span className="blinking-dot" />

            Learning Portal
          </Badge>

          <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl">
            {academyName}
          </CardTitle>

          <CardDescription className="mt-2 max-w-2xl text-sm sm:text-base">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Sections rendered from JSON */}
      {sections.map((section) => {
        if (section.id === "videos") {
          return (
            <VideoSection
              key={section.id}
              section={section}
            />
          );
        }

        if (section.id === "notes") {
          return (
            <NotesSection
              key={section.id}
              section={section}
            />
          );
        }

        return null;
      })}
      <h3 className="mt-8 border-t border-border px-4 pt-6 text-center text-sm text-muted-foreground sm:text-base">
        Founded & Developed with{" "}
        <span className="inline-block text-red-500">❤️</span>
        {" "}by{" "}
        <span className="font-semibold text-foreground">
          Tejas Sir
        </span>
      </h3>
    </main>
  );
}
