// json2html.js

export default function json2html(data) {
  // Initialize the HTML table with a data-user attribute
  let html = '<table data-user="tulasivullendula@gmail.com">';

  // Add table header
  html += `
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
    `;

  // Loop through the data array and create table rows
  data.forEach((item) => {
    html += "<tr>";
    html += `<td>${item.Name || ""}</td>`;
    html += `<td>${item.Age || ""}</td>`;
    html += `<td>${item.Gender || ""}</td>`;
    html += "</tr>";
  });

  // Close the table body and table tags
  html += "</tbody></table>";

  return html;
}
