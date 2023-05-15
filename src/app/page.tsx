import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="bg-secondary text-white px-32 pb-[240px]">
        {/* Navigation */}
        <nav className="flex justify-between items-center mt-8">
          <Link href="/" className="font-bold text-4xl">
            Jalan<span className="text-primary">IN</span>
          </Link>

          <div className="navigation flex gap-14 text-lg">
            <Link href="/" className="font-medium ">
              Home
            </Link>
            <Link href="#" className="font-medium text-zinc-400">
              Destination
            </Link>
            <Link href="#" className="font-medium text-zinc-400">
              About
            </Link>
            <Link href="#" className="font-medium text-zinc-400">
              Blog
            </Link>
          </div>

          <Button variant="secondary">Sign In</Button>
        </nav>

        {/* Tagline */}
        <div className="tagline grid grid-cols-2 gap-28 font-medium items-center my-28">
          <p className="text-6xl leading-normal">
            Explore all places in the world!
          </p>
          <div>
            <p className="leading-relaxed mb-8 text-lg">
              Get unforgettable valuable experiences with us and gain the
              ability to explore the world in your hands. JalanIN is committed
              to continuing to be the connecting link for your journey around
              the world.
            </p>
            <Button variant="primary">Explore Now!</Button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-6 gap-5">
          <div className="col-span-3 relative">
            <Image
              src="/gallery1.jpg"
              alt="Gallery photo"
              width={600}
              height={600}
              className="object-cover h-[450px] w-full rounded-md"
            />

            <p className="absolute top-6 left-6 bg-white/50 text-zinc-900 font-medium py-3 px-7 rounded-md">
              Sizuoka, Japan
            </p>
          </div>

          <div>
            <Image
              src="/gallery2.jpg"
              alt="Gallery photo"
              width={600}
              height={600}
              className="object-cover h-[450px] w-full rounded-md"
            />
          </div>

          <div>
            <Image
              src="/gallery3.jpg"
              alt="Gallery photo"
              width={600}
              height={600}
              className="object-cover h-[450px] w-full rounded-md"
            />
          </div>

          <div>
            <Image
              src="/gallery4.jpg"
              alt="Gallery photo"
              width={600}
              height={600}
              className="object-cover h-[450px] w-full rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="px-32 -translate-y-[80px]">
        <div className="grid grid-cols-4 shadow-lg p-10 rounded-md bg-white border gap-12">
          <div className="flex gap-4 items-center">
            <Image
              src="/icon/icMap.svg"
              alt="Destination"
              width={40}
              height={40}
            />
            <p className="font-bold text-2xl text-zinc-900">Destination</p>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/icon/icCalendar.svg"
              alt="Date"
              width={40}
              height={40}
            />
            <p className="font-bold text-2xl text-zinc-900">Date</p>
          </div>

          <div className="flex gap-4 items-center">
            <Image
              src="/icon/icGroup.svg"
              alt="People"
              width={40}
              height={40}
            />
            <p className="font-bold text-2xl text-zinc-900">People</p>
          </div>

          <div></div>

          <input
            type="text"
            placeholder="Where are you going?"
            className="p-4 bg-zinc-100 -mt-6 rounded-md w-full"
          />

          <input
            type="date"
            placeholder="when will you start?"
            className="p-4 bg-zinc-100 -mt-6 rounded-md w-full"
          />

          <input
            type="number"
            placeholder="How many people?"
            className="p-4 bg-zinc-100 -mt-6 rounded-md w-full"
          />

          <div className="-mt-6">
            <Button variant="primary" className="h-full w-full flex items-center justify-center text-center">
              Search Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
