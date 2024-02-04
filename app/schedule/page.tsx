import CountdownTimer from "@/components/CountDownTimer";
export const metadata = {
  title: "schedule.",
};

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <table className="text-white table-auto text-center">
          <thead>
            <tr className="text-sm lg:text-3xl">
              <th>date</th>
              <th>exam</th>
              <th>countdown</th>
            </tr>
          </thead>
          <tbody className="text-center text-xs lg:text-xl">
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                20/2
              </th>
              <td>chem/accounts</td>
              <td>
                <CountdownTimer targetDate="2024-02-20" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                21/2
              </th>
              <td>eng lang</td>
              <td>
                <CountdownTimer targetDate="2024-02-21" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                22/2
              </th>
              <td>physics/commerce</td>
              <td>
                <CountdownTimer targetDate="2024-02-22" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                23/2
              </th>
              <td>ped</td>
              <td>
                <CountdownTimer targetDate="2024-02-23" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                24/2
              </th>
              <td>eng lit</td>
              <td>
                <CountdownTimer targetDate="2024-02-24" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                26/2
              </th>
              <td>maths</td>
              <td>
                <CountdownTimer targetDate="2024-02-26" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                27/2
              </th>
              <td>biotech/cs</td>
              <td>
                <CountdownTimer targetDate="2024-02-27" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                28/2
              </th>
              <td>bio/econ</td>
              <td>
                <CountdownTimer targetDate="2024-02-28" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                29/2
              </th>
              <td>pol sci</td>
              <td>
                <CountdownTimer targetDate="2024-02-29" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                01/3
              </th>
              <td>history</td>
              <td>
                <CountdownTimer targetDate="2024-03-01" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                02/3
              </th>
              <td>psych</td>
              <td>
                <CountdownTimer targetDate="2024-03-02" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                04/3
              </th>
              <td>hindi</td>
              <td>
                <CountdownTimer targetDate="2024-03-04" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                05/3
              </th>
              <td>geo/sociology</td>
              <td>
                <CountdownTimer targetDate="2024-03-05" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                06/3
              </th>
              <td>legal studies</td>
              <td>
                <CountdownTimer targetDate="2024-03-06" isHero={false} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
