import CookieConsent from "react-cookie-consent";

export default function Cookies() {
    return (
        <div>
            <CookieConsent
                enableDeclineButton
                onDecline={() => {
                    alert("Entendo que minha navegação será prejudicada");
                }}
                declineButtonText="Recusar"
                location="bottom"
                buttonText="Aceito"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#141414" }}
                buttonStyle={{ color: "#000", fontSize: "14px" }}
                expires={150}
            >
                Este site utiliza cookies, e possui formulários de contato.{" "}

            </CookieConsent>
        </div>
    )
}