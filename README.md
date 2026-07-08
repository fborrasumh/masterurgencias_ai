# Laboratorio IA · Máster en Medicina de Urgencias-Emergencias (UMH) — 20 apps de obligado uso

Suite de 20 simuladores clínicos con IA para el **Máster Universitario en Medicina de Urgencias-Emergencias** de la UMH (tit_m_239), alineados con las asignaturas del plan de estudios oficial (2 cursos), más un **TFM·Coach**.

## ⚠ Aviso de seguridad y uso docente

Estas herramientas son **simuladores formativos**. **No sustituyen el juicio clínico, las guías oficiales ni la supervisión docente.** Ningún contenido generado por la IA debe usarse en pacientes reales. Verifica siempre dosis, protocolos y decisiones con fuentes oficiales vigentes (ERC/ILCOR, SEMES, protocolos SAMU/SUMMA y la documentación de cada asignatura).

## Arquitectura (kernel compartido)

- Single-file HTML + JavaScript vanilla, sin frameworks ni backend.
- Modelo `gpt-4o-mini` vía API de OpenAI; clave en `localStorage` (`ia_openai_key`), compartida entre todas las apps del mismo dominio.
- Flujo en 3 fases: **Caso clínico generado por IA → Simulación en rol (paciente / monitor / equipo) → Evaluación con rúbrica (JSON estructurado)**.
- Historial de sesiones en **IndexedDB** (una base por app: `medurg_umh_<id>`).
- Exportación de informe: **Markdown**, **.docx** (docx.js con carga perezosa desde CDN) e impresión/PDF del navegador.
- Datos clínicos generados a temperatura moderada y coherentes; la app pide siempre confirmar con guías oficiales.

## Catálogo por asignatura

### 1er curso — Primer semestre
| Asignatura | App |
|---|---|
| Ámbitos, Bases Bioéticas y Seguridad del Paciente | BioéticaUrgencias·AI |
| Actuación Psicológica en Medicina de Emergencias | PsicoEmergencia·AI |
| Farmacología Clínica | FarmacoUrgencias·AI |
| Diagnóstico por Imagen | ImagenUrgente·AI |
| Emergencias Médicas Hospitalarias | BoxCrítico·AI |
| Urgencias Médicas Fuera del Hospital | ExtraHospital·AI |

### 1er curso — Segundo semestre
| Asignatura | App |
|---|---|
| Urgencias Médicas Hospitalarias I | TriajeHospitalario·AI |
| Urgencias Médicas Hospitalarias II | DecisiónClínica·AI |
| Emergencias Respiratorias Fuera del Hospital | VíaAérea·AI |
| Emergencias Neurológicas Fuera del Hospital | NeuroCódigo·AI |
| Emergencias Cardiovasculares Fuera del Hospital | CódigoInfarto·AI |

### 2º curso
| Asignatura | App |
|---|---|
| Cirugía en la Urgencia y Emergencia Médicas I | ABCDE·Trauma·AI |
| Cirugía en la Urgencia y Emergencias Médicas II | QuirófanoUrgente·AI |
| Medicina de Urgencias y Emergencias en Pediatría | PediUrgencias·AI |
| Medicina en el Paciente Crítico I | UCIVirtual·AI |
| Medicina en el Paciente Crítico II | VentilaShock·AI |
| Paciente Crítico Pediátrico | PediCrítico·AI |
| Urgencias Médicas en Cuidados Paliativos | PaliativosUrgencias·AI |
| Urgencias del Aparato Locomotor y Enfermedades Reumáticas | TraumaLocomotor·AI |
| Urgencias y Emergencias Psiquiátricas | PsiquiatríaUrgente·AI |

### Trabajo Fin de Máster
| Asignatura | App |
|---|---|
| Trabajo Fin de Máster | TFM·Coach·Urgencias |

## Despliegue en GitHub Pages

1. Crea un repositorio (p. ej. `medurgencias-umh-ia`).
2. Sube el contenido de esta carpeta `docs/`.
3. Settings → Pages → Source: rama `main`, carpeta `/docs`.
4. La URL será `https://<usuario>.github.io/medurgencias-umh-ia/`.

## Uso propuesto en la evaluación continua

El estudiante realiza las sesiones marcadas por cada asignatura, exporta el informe con transcripción + rúbrica y lo entrega como evidencia. La nota de la rúbrica es orientativa: la calificación final la fija el profesorado.
