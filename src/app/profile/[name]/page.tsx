import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component({ params }: { params: { name: string } }) {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {params?.name.charAt(0).toUpperCase() + params?.name.slice(1)}
              </h1>
              <p className="text-muted-foreground md:text-xl">
                I&apos;m a passionate comic book enthusiast, always on the
                lookout for the next great story.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Recently Added Games
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">The Dark Knight</h3>
                <p className="text-muted-foreground">Frank Miller</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Watchmen</h3>
                <p className="text-muted-foreground">Alan Moore</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Maus</h3>
                <p className="text-muted-foreground">Art Spiegelman</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Sandman</h3>
                <p className="text-muted-foreground">Neil Gaiman</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Persepolis</h3>
                <p className="text-muted-foreground">Marjane Satrapi</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Saga</h3>
                <p className="text-muted-foreground">Brian K. Vaughan</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Y: The Last Man</h3>
                <p className="text-muted-foreground">Brian K. Vaughan</p>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <img
                src="/placeholder.svg"
                alt="Comic Book Cover"
                width={300}
                height={450}
                className="mx-auto mb-4 h-[450px] w-[300px] rounded-md object-cover"
                style={{ aspectRatio: "300/450", objectFit: "cover" }}
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">Fables</h3>
                <p className="text-muted-foreground">Bill Willingham</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Bookshelf
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Read</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">The Dark Knight</h4>
                    <p className="text-muted-foreground text-sm">
                      Frank Miller
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Watchmen</h4>
                    <p className="text-muted-foreground text-sm">Alan Moore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Maus</h4>
                    <p className="text-muted-foreground text-sm">
                      Art Spiegelman
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Currently Reading</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Sandman</h4>
                    <p className="text-muted-foreground text-sm">Neil Gaiman</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Persepolis</h4>
                    <p className="text-muted-foreground text-sm">
                      Marjane Satrapi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Want to Read</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Saga</h4>
                    <p className="text-muted-foreground text-sm">
                      Brian K. Vaughan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Y: The Last Man</h4>
                    <p className="text-muted-foreground text-sm">
                      Brian K. Vaughan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Fables</h4>
                    <p className="text-muted-foreground text-sm">
                      Bill Willingham
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-4 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Favorite Comics</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">The Dark Knight</h4>
                    <p className="text-muted-foreground text-sm">
                      Frank Miller
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Watchmen</h4>
                    <p className="text-muted-foreground text-sm">Alan Moore</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="/placeholder.svg"
                    alt="Comic Book Cover"
                    width={100}
                    height={150}
                    className="rounded-md object-cover"
                    style={{ aspectRatio: "100/150", objectFit: "cover" }}
                  />
                  <div>
                    <h4 className="text-base font-semibold">Sandman</h4>
                    <p className="text-muted-foreground text-sm">Neil Gaiman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
