import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ButtonWithAvataar } from "./ButtonWithAvataar";

interface BlogPostCardProps {
  title: string;
  description: string;
  avatarImageLink: string;
  date: string;
}

export function BlogPostCard({
  title,
  description,
  avatarImageLink,
  date,
}: BlogPostCardProps) {
  return (
    <Card className="w-full max-w-md hover:shadow-lg transition-shadow duration-200 p-6 mb-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold line-clamp-2">{title}</CardTitle>
        <ButtonWithAvataar avatarImageLink={avatarImageLink}>
          Click me!
        </ButtonWithAvataar>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between pt-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={avatarImageLink} alt="Author avatar" />
            <AvatarFallback>AU</AvatarFallback>
          </Avatar>
        </div>
        <time className="text-sm text-muted-foreground" dateTime={date}>
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </CardFooter>
    </Card>
  );
}
