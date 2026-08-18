export default function PostCard() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow mb-4">

      <h2 className="text-xl font-semibold">
        EY Interview Experience
      </h2>

      <p className="text-gray-600 mt-2">
        Questions focused on DBMS, OS, and aptitude.
        HR round was slow but technical round was moderate.
      </p>

      <div className="flex gap-3 mt-4">

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          EY
        </span>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          Software Engineer
        </span>

      </div>

    </div>
  )
}