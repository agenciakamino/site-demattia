import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site-config";

/*
  OG / social preview — gerado em build (estático).
  Paleta oficial: navy #221E45 (fundo) + amarelo #FFF369 como JOIA (filetes finos),
  nunca como texto sobre claro. Resolve a lacuna de OpenGraph mapeada na auditoria.
  ▶ Quando o cliente enviar o logo vetorial, trocar o monograma "DM" por <img>.
*/

export const alt = `${SITE.name} — ${SITE.slogan}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 120% at 85% 0%, #221E45 0%, #191634 100%)",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          color: "#FBFAF7",
        }}
      >
        {/* Topo: monograma DM + descritor */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 16,
              background: "#FFF369",
              color: "#221E45",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            DM
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 600 }}>De Mattia</div>
            <div
              style={{
                fontSize: 15,
                letterSpacing: 6,
                color: "rgba(251,250,247,0.6)",
                fontFamily: "system-ui, sans-serif",
              }}
            >
              ADVOGADOS ASSOCIADOS
            </div>
          </div>
        </div>

        {/* Centro: headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 64, height: 3, background: "#FFF369", marginBottom: 28 }} />
          <div style={{ fontSize: 60, lineHeight: 1.1, maxWidth: 880 }}>
            {SITE.slogan}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              lineHeight: 1.4,
              maxWidth: 820,
              marginTop: 24,
              color: "rgba(251,250,247,0.62)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Direito do Trabalho Patronal e Cível Empresarial — gestão jurídica
            preventiva para empresas.
          </div>
        </div>

        {/* Rodapé: registro + praça */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 3,
            color: "rgba(251,250,247,0.55)",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <span>{SITE.oabRegistry}</span>
          <span style={{ color: "#FFF369" }}>·</span>
          <span>JOINVILLE / SC</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
