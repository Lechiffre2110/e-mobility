export default function Dashboard() {
  const sampleContributors = [
    {
      name: "Max Mustermann",
      role: "Student (HTW)",
      description:
        "Ich bin ein Student der HTW Berlin und möchte gerne am Projekt mitwirken",
    },
    {
      name: "Max Mustermann",
      role: "Student (HTW)",
      description:
        "Ich bin ein Student der HTW Berlin und möchte gerne am Projekt mitwirken",
    },
    {
      name: "Max Mustermann",
      role: "Student (HTW)",
      description:
        "Ich bin ein Student der HTW Berlin und möchte gerne am Projekt mitwirken",
    },
    {
      name: "Max Mustermann",
      role: "Student (HTW)",
      description:
        "Ich bin ein Student der HTW Berlin und möchte gerne am Projekt mitwirken",
    },
  ];

  return (
    <>
      <h2 className="h-16 text-2xl bg-white w-[97%] ml-[2%] rounded-2xl flex items-center px-5 text-gray-700 font-bold">
        Dashboard
      </h2>

      <div className="w-[97%] ml-[2%] flex flex-row justify-around bg-white rounded-2xl py-5 mt-3 h-auto">
        <div>
          <h2 className="text-2xl font-bold">Contributors</h2>
          {sampleContributors.map((contributor) => {
            return (
              <div className="flex flex-row justify-between">
                <p>{contributor.name}</p>
                <p>{contributor.role}</p>
              </div>
            );
          })}
        </div>

        <div>
          <h2 className="text-2xl font-bold">Requests</h2>
          <div className="flex flex-row justify-between">
            {sampleContributors.map((contributor) => {
              return (
                <div className="flex flex-col justify-between">
                  <p>{contributor.name}</p>
                  <p>{contributor.role}</p>
                  <p>{contributor.description}</p>
                  <button>Accept</button>
                    <button>Decline</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
