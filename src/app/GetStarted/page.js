import Link from "next/link"

const page = () => {
  return (
    <div className="flex flex-col justify-center  items-center">
      <h1  className="text-4xl text-center mt-10">Get Started</h1>
<Link href="/">
<button className='bg-pink-400 font-semibold text-white rounded-md p-2 mt-4'>Go Home</button>
</Link>

    </div>
  )
}

export default page
