import React from "react";

const SponsorshipTable = () => {
  return (
    <section id="sponsorship">
      <div className="mb-16 mt-24 mx-20">
        <div className="w-full flex justify-start">
          <h1 className="text-5xl mb-6 mt-10 font-bold tracking-tight bg-gradient-to-t from-[#ED0000] to-[#FF4141] text-transparent bg-clip-text">
            Sponsorships
          </h1>
        </div>
        <p className="text-black text-lg font-semibold tracking-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et diam
          pretium, imperdiet odio sed, commodo elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam sollicitudin sit amet odio nec
          pretium.
        </p>
        <div className="overflow-x-auto p-4 pt-10">
          <div className="rounded-3xl overflow-hidden">
            <table className="min-w-full bg-gray-100 text-black">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-lg font-bold text-white bg-black">
                    Paquetes de patrocinios SAE AERODESIGN 3ra Generación
                    (Temporada 2023-2024)
                  </th>
                  <th className="py-3 px-2 text-center bg-blue-500 text-white">
                    PAQUETE PERSONAL <br /> $1,000 - $1,450 <br /> (10x10)
                  </th>
                  <th className="py-3 px-2 text-center bg-red-500 text-white">
                    PAQUETE BRONCE <br /> $1,500 - $4,450 <br /> (25)
                  </th>
                  <th className="py-3 px-2 text-center bg-gray-500 text-white">
                    PAQUETE PLATA <br /> $4,500 - $10,000 <br /> (35)
                  </th>
                  <th className="py-3 px-2 text-center bg-yellow-500 text-white">
                    PAQUETE ORO <br /> $10,000 <br /> (50)
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Logo/Firma y Nombre en la aeronave", "✔", "✔", "✔", "✔"],
                  [
                    "Participación y exposición de marca en redes",
                    "✔",
                    "✔",
                    "✔",
                    "✔",
                  ],
                  [
                    "Exposición de marca (logotipo) de material de difusión en eventos presenciales",
                    "✔",
                    "✔",
                    "✔",
                    "✔",
                  ],
                  [
                    "Acceso exclusivo a preventas de material y mercancía oficial del equipo",
                    "✔",
                    "✔",
                    "✔",
                    "✔",
                  ],
                  [
                    "Exposición de marca (logotipo) en material promocional dentro del taller",
                    "",
                    "✔",
                    "✔",
                    "✔",
                  ],
                  [
                    "Exposición de marca (logotipo) en el uniforme del equipo",
                    "",
                    "",
                    "✔",
                    "✔",
                  ],
                  [
                    "Red de networking entre patrocinadores, integrantes del equipo y colaboradores de la escudería",
                    "",
                    "",
                    "✔",
                    "✔",
                  ],
                  [
                    "Recorrido virtual del taller e invitación a reuniones de integración con el equipo",
                    "✔",
                    "✔",
                    "✔",
                    "✔",
                  ],
                  [
                    "Visita presencial a instalaciones del taller y áreas de trabajo",
                    "",
                    "",
                    "✔",
                    "✔",
                  ],
                  [
                    "Reuniones colaborativas con el equipo para discusión de actualizaciones de diseño y manufactura",
                    "",
                    "",
                    "✔",
                    "✔",
                  ],
                  [
                    "Invitación a talleres y capacitaciones personalizadas de diseño e investigación",
                    "",
                    "",
                    "",
                    "✔",
                  ],
                  [
                    "Invitación a capacitaciones personalizadas de manufactura",
                    "",
                    "",
                    "",
                    "✔",
                  ],
                  [
                    "Préstamo de la aeronave para exposiciones presenciales (sujeto a disponibilidad)",
                    "",
                    "",
                    "",
                    "✔",
                  ],
                ].map((row, rowIndex) => (
                  <tr
                    className={` ${
                      rowIndex % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                    key={rowIndex}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        className={`py-3 px-4 font-medium ${
                          cellIndex === 0 ? "text-left" : "text-center"
                        }`}
                        key={cellIndex}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipTable;
