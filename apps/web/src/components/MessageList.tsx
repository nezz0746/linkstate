import { Card, CardContent } from "@cryptoresume/ui/components/ui/card";
import dayjs from "dayjs";
import { Avatar, AvatarFallback } from "@cryptoresume/ui/components/ui/avatar";
import { truncateAddress } from "~/src/lib/utils";
import { Message } from "@cryptoresume/database";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

export function MessageList() {
  const { address } = useAccount();
  const { data: messages, isLoading } = useQuery<Message[]>({
    queryKey: ["messages", address],
    queryFn: () => fetch(`/api/messages/${address}`).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-4">
              <div className="h-24 bg-muted rounded-md" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (messages?.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center text-muted-foreground">
          No messages received yet
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {messages?.map((message) => (
        <Card key={message.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-4">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {truncateAddress(message.fromAddress).slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium">
                    {truncateAddress(message.fromAddress)}
                  </p>
                  <time className="text-sm text-muted-foreground">
                    {dayjs(message.createdAt).format("MMM D, YYYY h:mm A")}
                  </time>
                </div>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {message.message}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
