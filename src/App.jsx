import PostCard from "./components/PostCard"
export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-2xl font-bold text-blue-600">
          CareerTruth
        </h1>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Login
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mt-24 px-4">

        <h2 className="text-5xl font-bold text-center text-gray-800">
          Real Placement Experiences.
        </h2>

        <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl">
          Anonymous interview stories, salary transparency,
          and honest career discussions for students.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700">
          Explore Posts
        </button>

      </div>

    </div>
  )
}