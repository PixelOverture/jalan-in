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

const testimonials = [
  {
    id: 1,
    profileImg: '/person1.png',
    name: 'Jack Sam',
    comment:
      'What a great service! I feel very satisfied to be able to travel around the world using JalanIN. Good work! keep up your good service.',
  },
  {
    id: 2,
    profileImg: '/person2.png',
    name: 'Andryana',
    comment:
      "JanIN is very easy to use, the website is very friendly. I've never come across anything like this before.",
  },
  {
    id: 3,
    profileImg: '/person3.png',
    name: 'Tasya Ranin',
    comment:
      "I heard from a friend that this product is amazing, it's true! I'm very satisfied with the service. The customer service is also very helpful. I really like!",
  },
  {
    id: 4,
    profileImg: '/person4.png',
    name: 'Jack Sam',
    comment:
      'What a great service! I feel very satisfied to be able to travel around the world using JalanIN. Good work! keep up your good service.',
  },
  {
    id: 5,
    profileImg: '/person5.png',
    name: 'Bryan',
    comment:
      'Exceptional service, satisfied customers, easy to use. Keep up the great work, JalanIN!',
  },
]

export default function Home() {
  const [destination, setDestination] = React.useState(
    Math.round(destinations.length / 2)
  )
  const [testimonial, setTestimonial] = React.useState(3)

  const scrollContainerRef = React.useRef(null)
  const scrollTestimonialRef = React.useRef(null)

  const scrollToDestination = () => {
    const containerElement: any = scrollContainerRef.current
    const imageElement = document.getElementById(`destination-${destination}`)

    if (containerElement && imageElement) {
      const containerWidth = containerElement.offsetWidth
      const activeElementWidth = imageElement.offsetWidth
      const activeElementOffset = imageElement.offsetLeft
      const scrollOffset =
        activeElementOffset - (containerWidth - activeElementWidth) / 2

      containerElement.scrollTo({
        left: scrollOffset,
        behavior: 'smooth',
      })
    }
  }

  const scrollToTestimonial = () => {
    const containerElement: any = scrollTestimonialRef.current
    const imageElement = document.getElementById(`testimonial-${testimonial}`)

    if (containerElement && imageElement) {
      const containerWidth = containerElement.offsetWidth
      const activeElementWidth = imageElement.offsetWidth
      const activeElementOffset = imageElement.offsetLeft
      const scrollOffset =
        activeElementOffset - (containerWidth - activeElementWidth) / 2

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

  const handleNextTestimonial = () => {
    setTestimonial((prev) => (prev >= testimonials.length ? prev : prev + 1))
    scrollToTestimonial()
  }

  const handlePrevTestimonial = () => {
    setTestimonial((prev) => (prev <= 1 ? prev : prev - 1))
    scrollToTestimonial()
  }

  React.useEffect(() => {
    scrollToDestination()
    scrollToTestimonial()
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

      {/* Popular destination */}
      <div className="px-32 text-zinc-900 mt-40">
        <p className="text-6xl font-medium text-center">
          Popular destinations for you
        </p>
        <p className="text-lg font-medium mt-6 text-center text-zinc-500">
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

      {/* Why choose us? */}
      <div className="mt-40">
        <p className="text-6xl font-medium text-center">Why choose us?</p>
        <p className="text-lg font-medium mt-6 text-center text-zinc-500">
          Why choose us? We have all your travel needs covered and offer the
          best service.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 px-32 gap-5 justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/service1.jpg"
            alt="Our service"
            width={411}
            height={296}
            className="w-full"
          />

          <div className="w-full px-5 -translate-y-16">
            <div className="bg-white p-8 rounded-md border shadow-md min-h-[200px]">
              <div className="flex items-center gap-4 h-10">
                <Image
                  src="/icon/ic1.svg"
                  alt="Service"
                  width={40}
                  height={40}
                />
                <p className="font-bold text-xl text-zinc-800">Affordable</p>
              </div>

              <p className="text-zinc-600 mt-4 text-lg">
                We provide affordable service to various tourist destinations.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/service2.jpg"
            alt="Our service"
            width={411}
            height={296}
            className="w-full"
          />

          <div className="w-full px-5 -translate-y-16">
            <div className="bg-white p-8 rounded-md border shadow-md min-h-[200px]">
              <div className="flex items-center gap-4 h-10">
                <Image
                  src="/icon/ic2.svg"
                  alt="Service"
                  width={40}
                  height={40}
                />
                <p className="font-bold text-xl text-zinc-800">Partner</p>
              </div>

              <p className="text-zinc-600 mt-4 text-lg">
                We have more than 800 partners worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/service3.jpg"
            alt="Our service"
            width={411}
            height={296}
            className="w-full"
          />

          <div className="w-full px-5 -translate-y-16">
            <div className="bg-white p-8 rounded-md border shadow-md min-h-[200px]">
              <div className="flex items-center gap-4 h-10">
                <Image
                  src="/icon/ic3.svg"
                  alt="Service"
                  width={40}
                  height={40}
                />
                <p className="font-bold text-xl text-zinc-800">
                  World is in your hands
                </p>
              </div>

              <p className="text-zinc-600 mt-4 text-lg">
                We have all tourist destinations in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How we can help your journey? */}
      <div className="mt-40">
        <p className="text-6xl font-medium text-center">
          How we can help your journey?
        </p>
        <p className="text-lg font-medium mt-6 text-center text-zinc-500">
          We connect you with your destination in an easy way.
        </p>
      </div>

      <div className="grid grid-cols-3 px-32 mt-16 gap-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image src="/icMap.svg" alt="Our help" width={60} height={60} />
          <p className="font-bold text-xl">Find your destination</p>
          <p className="text-zinc-500 text-lg">
            Find your favorite tourist destinations quickly and easily
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <Image src="/icTicket.svg" alt="Our help" width={60} height={60} />
          <p className="font-bold text-xl">Book a ticket and pay</p>
          <p className="text-zinc-500 text-lg">
            After finding the right destination, book your ticket immediately
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">
          <Image src="/icSmile.svg" alt="Our help" width={60} height={60} />
          <p className="font-bold text-xl">Find your destination</p>
          <p className="text-zinc-500 text-lg">
            After everything is done, it&apos;s time to enjoy your trip.
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="mt-40 bg-secondary text-zinc-100 py-20">
        <div className="px-32">
          <div className="max-w-lg">
            <p className="text-6xl leading-tight">
              Customers says about our service
            </p>
            <p className="mt-6 leading-relaxed">
              If you are still unsure about us, let&apos;s see the testimonials
              from customers who have used our services.
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-6 justify-end px-32 -translate-y-40">
            <button onClick={handlePrevTestimonial}>
              <Image
                src="/icon/icArrow.svg"
                alt="Previous"
                width={60}
                height={60}
              />
            </button>

            <button onClick={handleNextTestimonial}>
              <Image
                src="/icon/icArrow.svg"
                alt="Previous"
                width={60}
                height={60}
                className="rotate-180"
              />
            </button>
          </div>

          <div
            className="flex overflow-hidden gap-7 pt-24 px-32 -translate-y-8"
            ref={scrollTestimonialRef}
          >
            {testimonials.map(({ id, profileImg, name, comment }) => (
              <div
                key={id}
                id={`testimonial-${id}`}
                className={`min-w-[370px] max-w-[370px] bg-[#385F5D] rounded-md p-6 flex flex-col gap-6 ${
                  testimonial === id ? '-translate-y-24' : ''
                }`}
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={profileImg}
                    alt={`${name} picture`}
                    width={46}
                    height={46}
                  />
                  <p className="font-bold text-lg">{name}</p>
                </div>

                <p className="text-lg">{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Want to start  */}
      <div className="mt-40 flex flex-col gap-6 text-center items-center">
        <p className="text-6xl">Want to start the trip now?</p>
        <p className="text-lg text-zinc-500">
          Don&apos;t hesitate, don&apos;t be confused either. A long journey
          awaits you ahead! let&apos;s click
        </p>
        <Button variant="primary">Lets Start!</Button>
      </div>

      {/* Footer */}
      <div className="mt-40 grid grid-cols-6 text-lg bg-secondary text-zinc-50 px-32 py-24 gap-24">
        <div className="col-span-2">
          <Link href="/" className="font-bold text-4xl">
            Jalan<span className="text-primary">IN</span>
          </Link>
          <p className="mt-6">
            The best traveling platform that will take you around the world.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Resource</p>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Download
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Help Center
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Guide Book
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Location Map
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Company</p>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            About Us
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Contact
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Partner
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Travellers</p>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Destination
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Travellers Stories
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Packet
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold">Get App</p>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            App Store
          </Link>
          <Link href="#" className="text-lg w-fit hover:text-zinc-200">
            Google Play Store
          </Link>
        </div>
      </div>
    </main>
  )
}
