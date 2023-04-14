function latestThirty() {
	fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather')
		.then(response => response.json())
		.then(data => {

			let rows = '';

			for (let i = 29; i >= 0; i--) {

				const measurementType = Object.keys(data[i].data)[0].replace('_', ' ')
				const measurementValue = Object.values(data[i].data);

				if (measurementType === "Air_pres_1") {
					measurementType = "Air pressure";
				}

				rows += `
						<tr>
							<td class="bold">${30 - i}</td>
                     		<td>${data[i].date_time.slice(0, 10)}</td>
							<td>${data[i].date_time.slice(11, 19)}</td>
							<td class="capitalize">${measurementType}</td>
							<td>${measurementValue}</td>
						</tr>
					`;

			}

			document.querySelector('.latestThirtyBody').innerHTML = rows;

			document.getElementById("header").innerHTML = "Latest 30 Measurements";

			document.getElementById("latestThirty").style.display = '';
			document.getElementById("temperatureTable").style.display = 'none';
			document.getElementById("windSpeedTable").style.display = 'none';
			document.getElementById("infoPage").style.display = 'none';
			document.getElementById("temperatureChart").style.display = 'none';

		}).catch(error => console.error(error));
}


function latestTemps() {
	fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/temperature')
		.then(response => response.json())
		.then(data => {

			let rows = '';

			for (let i = 0; i < 20; i++) {


				rows += `
						<tr>
							<td class="bold">${i + 1}</td>
                     		<td>${data[i].date_time.slice(0, 10)}</td>
							<td>${data[i].date_time.slice(11, 19)}</td>
							<td>${data[i].temperature + " (C°)"}</td>
						</tr>
					`;

			}

			document.querySelector('.temperatureTableBody').innerHTML = rows;

			document.getElementById("header").innerHTML = "Latest 20 Temperatures";


			document.getElementById("latestThirty").style.display = 'none';
			document.getElementById("temperatureTable").style.display = '';
			document.getElementById("windSpeedTable").style.display = 'none';
			document.getElementById("infoPage").style.display = 'none';



		}).catch(error => console.error(error));
}

function windSpeed() {
	fetch('http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed')
		.then(response => response.json())
		.then(data => {

			let rows = '';

			for (let i = 0; i < 20; i++) {
				if (data[i]) {
					rows += `
					<tr>
					  <td class="bold">${i + 1}</td>
					  <td>${data[i].date_time.slice(0, 10)}</td>
					  <td>${data[i].date_time.slice(11, 19)}</td>
					  <td>${data[i].wind_speed + " (m/s)"}</td>
					</tr>
				  `;
				}
			}

			document.querySelector('.windSpeedTableBody').innerHTML = rows;

			document.getElementById("header").innerHTML = "Latest 20 Wind Speeds";

			document.getElementById("latestThirty").style.display = 'none';
			document.getElementById("temperatureTable").style.display = 'none';
			document.getElementById("windSpeedTable").style.display = '';
			document.getElementById("infoPage").style.display = 'none';


		}).catch(error => console.error(error));
}



function infoPage() {

	document.getElementById("header").innerHTML = "Author Information"

	document.getElementById("latestThirty").style.display = 'none';
	document.getElementById("temperatureTable").style.display = 'none';
	document.getElementById("windSpeedTable").style.display = 'none';
	document.getElementById("infoPage").style.display = '';



}
