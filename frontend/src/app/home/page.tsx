export default function About() {
    return (
      <main>
        <div className="box-border w-screen h-screen bg-gray-950">
          <div className="w-full h-1/6 border-b-2">
          </div>
          <div className="w-full h-5/6">
            <div className="w-3/4 m-auto pt-12">
              <table className="table-auto m-auto text-center w-full">
                <thead className="">
                  <tr>
                    <th className="">Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="odd:bg-gray-100">
                  <tr>
                    <td className="">dw</td>
                    <td>dwa</td>
                    <td>dw</td>
                    <td><button className="bg-gray-900 w-2/4 rounded py-1">Edit</button></td>
                  </tr>
                  <tr>
                    <td className="">dw</td>
                    <td>dwa</td>
                    <td>dw</td>
                    <td><button className="bg-gray-900 w-2/4 rounded py-1">Edit</button></td>
                  </tr>
                  <tr >
                    <td className="">dw</td>
                    <td>dwa</td>
                    <td>dw</td>
                    <td><button className="bg-gray-900 w-2/4 rounded py-1">Edit</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    )
  }