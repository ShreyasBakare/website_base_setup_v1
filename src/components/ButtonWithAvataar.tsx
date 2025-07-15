import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
    import { Button } from "./ui/button";

interface ButtonWithAvataarProps {
    avatarImageLink: string;
    children: React.ReactNode;
}

export function ButtonWithAvataar({ avatarImageLink, children }: ButtonWithAvataarProps) {
    return (
        <Button>
            {
                <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={avatarImageLink} alt="Author avatar" />
                        <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                </div>
            }
            {children}
        </Button>
    );
}














