'use client'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const destinations = [
  { id: 1, imgUrl: '/destination1.jpg', desc: 'Huairou District, China' },
  { id: 2, imgUrl: '/destination2.jpg', desc: 'Sydney, Australia' },
  { id: 3, imgUrl: '/destination3.jpg', desc: 'Bali, Indonesia' },
  { id: 4, imgUrl: '/destination4.jpg', desc: 'Manila, Thailand' },
  { id: 5, imgUrl: '/destination5.jpg', desc: 'Amsterdam, Netherland' },
  { id: 6, imgUrl: '/destination6.jpg', desc: 'London, UK' },
  { id: 7, imgUrl: '/destination7.jpg', desc: 'Lombok, Indonesia' },
]

export default function Home() {
  const [destination, setDestination] = React.useState(
    Math.round(destinations.length / 2)
  )
  const scrollContainerRef = React.useRef(null)

  const scrollToDestination = () => {
    const containerElement: any = scrollContainerRef.current
    const imageElement = document.getElementById(`destination-${destination}`)

    if (containerElement && imageElement) {
      const containerWidth = containerElement.offsetWidth
      const imageWidth = imageElement.offsetWidth
      const scrollOffset =
        imageElement.offsetLeft - (containerWidth - imageWidth) / 2

      containerElement.scrollTo({
        left: scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  const handleNextClick = () => {
    setDestination((prev) => (prev >= destinations.length ? prev : prev + 1))

    scrollToDestination()
  }

  const handlePrevClick = () => {
    setDestination((prev) => (prev <= 1 ? prev : prev - 1))
    scrollToDestination()
  }

  React.useEffect(() => {
    scrollToDestination()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

      {/* Search bar */}
      <div className="px-32 -mt-20">
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
            <Button
              variant="primary"
              className="h-full w-full flex items-center justify-center text-center"
            >
              Search Now
            </Button>
          </div>
        </div>
      </div>

      {/* Popular Destination */}
      <div className="px-32 text-zinc-900 mt-40">
        <p className="text-6xl font-medium text-center">
          Popular destinations for you
        </p>
        <p className="text-lg font-medium mt-6 text-center">
          Take a look at popular destination recommendations just for you
        </p>

        <div className="flex justify-between">
          <button className="hover:bg-zinc-100" onClick={handlePrevClick}>
            <Image
              src="/icon/icArrow.svg"
              alt="Previous"
              width={60}
              height={60}
            />
          </button>

          <button className="hover:bg-zinc-100" onClick={handleNextClick}>
            <Image
              src="/icon/icArrow.svg"
              alt="Previous"
              width={60}
              height={60}
              className="rotate-180"
            />
          </button>
        </div>
      </div>

      <div
        className="px-32 flex gap-8 mt-4 items-center overflow-x-hidden"
        ref={scrollContainerRef}
      >
        {destinations.map(({ id, imgUrl, desc }) => (
          <div
            key={id}
            className="min-w-fit rounded-md h-full flex flex-col items-center justify-center"
            id={`destination-${id}`}
          >
            <Image
              src={imgUrl}
              alt="Popular destination"
              width={244}
              height={352}
              className={`object-center object-cover rounded-md w-full ${
                destination === id
                  ? 'h-[410px] w-[284px]'
                  : 'opacity-70 h-[352px] w-[244px] mb-12'
              }`}
            />

            {destination === id && (
              <p className="font-bold text-xl mt-4 text-center text-zinc-700">
                {desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Why */}
      <div className="mt-40"></div>
    </main>
  )
}
