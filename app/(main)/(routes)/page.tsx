import { Button } from "@/components/ui/button"
import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <div className="p-5 flex flex-col">
      <UserButton afterSignOutUrl="/" />

      <div className="p-5 space-y-5">
        <h1 className='text-green-700 bg-red-300 font-bold flex justify-center'>Hello, welcome to the Main Page</h1>

        <div className="bg-red-500 flex justify-center space-x-10 p-5">
          <Button variant='ghost'>Ghostly Button</Button>
          <Button variant='default'>Regular Button</Button>
          <Button variant='secondary'>Secondary Button</Button>
          <Button variant='zhiddentest'>Custom Button</Button>
        </div>
      </div>
    </div>
  )
}
