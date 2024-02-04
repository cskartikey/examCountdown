import Head from "next/head";

export const metadata = {
  title: "schedule.",
};

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-36">
      <Head>
        <title>Schedule</title>
      </Head>
      <table className="w-4/6 text-white table-auto text-center">
        <thead>
          <tr className="text-lg lg:text-3xl">
            <th>date</th>
            <th>exam</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm lg:text-xl">
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              20/2
            </th>
            <td>chemistry/accounts</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              21/2
            </th>
            <td>english language</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              22/2
            </th>
            <td>physics/commerce</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              23/2
            </th>
            <td>physical education</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              24/2
            </th>
            <td>literature in english</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              26/2
            </th>
            <td>maths</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              27/2
            </th>
            <td>biotech/cs</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              28/2
            </th>
            <td>bio/econ</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              29/2
            </th>
            <td>pol sci</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              01/3
            </th>
            <td>history</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              02/3
            </th>
            <td>psychology</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              04/3
            </th>
            <td>hindi</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              05/3
            </th>
            <td>geography/sociology</td>
          </tr>
          <tr>
            <th scope="row" className="py-2 whitespace-nowrap">
              06/3
            </th>
            <td>legal studies</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
