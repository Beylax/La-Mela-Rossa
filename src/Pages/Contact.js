import React from "react";
import "./Contact.css";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="Contact">
				<section>
					<div className="c-card position-relative">
						<div className="c-card-header">
							<div className="c-card-title h4 fw-bold text-color-red">
								LA MELA ROSSA
							</div>
						</div>
						<hr></hr>
						<div className="c-card-body">
							<div className="c-card-subtitle text-color-green">
								Numero di telefono
							</div>
							<div>3494537994</div>
							<div className="c-card-subtitle text-color-green">
								Email
							</div>
							<div>lamelarossa@mondomelarossa.it</div>
							<div className="c-card-subtitle text-color-green">
								Instagram
							</div>
							<a
								className="text-color-red"
								href="https://www.instagram.com/_lamelarossa_/"
								target="_blank"
								rel="noreferrer"
							>
								_lamelarossa_
							</a>
							<div className="c-card-subtitle text-color-green">
								Indirizzo CALISESE
							</div>
							<div>
								Scuola Infanzia di Calisese,{" "}
								<a
									className="text-color-red"
									href="https://goo.gl/maps/FdbraTEcRe3mpQfo6"
									target="_blank"
									rel="noreferrer"
								>
									Via Capranica n. 283
								</a>
							</div>
							<div className="c-card-subtitle text-color-green">
								Indirizzo RUFFIO
							</div>
							<div>
								Parrocchia di Ruffio,{" "}
								<a
									className="text-color-red"
									href="https://goo.gl/maps/XVGGdPrwiJNZsb17A"
									target="_blank"
									rel="noreferrer"
								>
									Via Ruffio n. 4151
								</a>
							</div>
							<div className="c-card-subtitle text-color-green">
								Indirizzo MONTIANO
							</div>
							<div>
								Scuola Infanzia di Montiano: "Le Colline",{" "}
								<a
									className="text-color-red"
									href="https://goo.gl/maps/XsrYtbNeiEVQChbt6"
									target="_blank"
									rel="noreferrer"
								>
									Via Castello Montenovo n. 31
								</a>
							</div>
						</div>
					</div>
				</section>
				<section className="c-card my-5">
					{/*Section heading*/}
					<h2 className="h1-responsive fw-bold text-center my-4 text-color-red">
						Oppure scrivici direttamente
					</h2>
					{/*Section description*/}
					<p className="text-center w-responsive mx-auto mb-5">
						Se hai bisogno di informazioni, hai delle domande, vuoi darci la tua opinione scrivici, ti risponderemo il prima possibile. Grazie🍎
					</p>

					<div className="row">
						{/*Grid column*/}
						<div className="col-12 mb-md-0 mb-5">
							<form
								id="contact-form"
								name="contact-form"
								action="mail.php"
								method="POST"
							>
								{/*Grid row*/}
								<div className="row my-2">
									{/*Grid column*/}
									<div className="col-md-6">
										<div className="md-form mb-0">
											<label for="name" className="c-card-subtitle text-color-green">
												Nome
											</label>
											<input
												type="text"
												id="name"
												name="name"
												className="form-control"
											/>
										</div>
									</div>
									{/*Grid column*/}

									{/*Grid column*/}
									<div className="col-md-6">
										<div className="md-form mb-0">
											<label for="email" className="c-card-subtitle text-color-green">
												Email
											</label>
											<input
												type="text"
												id="email"
												name="email"
												className="form-control"
											/>
										</div>
									</div>
									{/*Grid column*/}
								</div>
								{/*Grid row*/}

								{/*Grid row*/}
								<div className="row my-2">
									<div className="col-md-12">
										<div className="md-form mb-0">
											<label for="subject" className="c-card-subtitle text-color-green">
												Oggetto
											</label>
											<input
												type="text"
												id="subject"
												name="subject"
												className="form-control"
											/>
										</div>
									</div>
								</div>
								{/*Grid row*/}

								{/*Grid row*/}
								<div className="row my-2">
									{/*Grid column*/}
									<div className="col-md-12">
										<div className="md-form">
											<label for="message" className="c-card-subtitle text-color-green">
												Messaggio
											</label>
											<textarea
												type="text"
												id="message"
												name="message"
												rows="2"
												className="form-control md-textarea"
											></textarea>
										</div>
									</div>
								</div>
								{/*Grid row*/}
							</form>

							<div className="text-center text-md-left my-2">
								<button
									className="btn btn-primary"
									
								>
									Send
								</button>
							</div>
						</div>
						{/*Grid column*/}
					</div>
				</section>
			</div>
		);
	}
}

export default Contact;
