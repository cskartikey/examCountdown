import CountdownTimer from "@/components/CountDownTimer";
export const metadata = {
  title: "schedule.",
};

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="overflow-x-auto">
        <table className="text-white table-auto text-center border-separate border-spacing-x-3 lg:border-spacing-x-20">
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
              <td>chem/acc</td>
              <td>
                <CountdownTimer targetDate="2024-02-20 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                21/2
              </th>
              <td>eng lang</td>
              <td>
                <CountdownTimer targetDate="2024-02-21 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                22/2
              </th>
              <td>phy/comm</td>
              <td>
                <CountdownTimer targetDate="2024-02-22 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                23/2
              </th>
              <td>ped</td>
              <td>
                <CountdownTimer targetDate="2024-02-23 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                24/2
              </th>
              <td>eng lit</td>
              <td>
                <CountdownTimer targetDate="2024-02-24 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                26/2
              </th>
              <td>maths</td>
              <td>
                <CountdownTimer targetDate="2024-02-26 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                27/2
              </th>
              <td>biotech/cs</td>
              <td>
                <CountdownTimer targetDate="2024-02-27 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                28/2
              </th>
              <td>bio/econ</td>
              <td>
                <CountdownTimer targetDate="2024-02-28 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                29/2
              </th>
              <td>pol sci</td>
              <td>
                <CountdownTimer targetDate="2024-02-29 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                01/3
              </th>
              <td>history</td>
              <td>
                <CountdownTimer targetDate="2024-03-01 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                02/3
              </th>
              <td>psych</td>
              <td>
                <CountdownTimer targetDate="2024-03-02 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                04/3
              </th>
              <td>hindi</td>
              <td>
                <CountdownTimer targetDate="2024-03-04 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                05/3
              </th>
              <td>geo/soc</td>
              <td>
                <CountdownTimer targetDate="2024-03-05 00:00:00" isHero={false} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-2 whitespace-nowrap">
                06/3
              </th>
              <td>legal</td>
              <td>
                <CountdownTimer targetDate="2024-03-06 00:00:00" isHero={false} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
