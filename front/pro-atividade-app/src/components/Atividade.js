import React from "react";

export default function Atividade(props) {
  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }

  function prioridadeStyle(param, icon) {
    switch (param) {
      case "1":
        return icon ? "smile" : "success";
      case "2":
        return icon ? "meh" : "dark";
      case "3":
        return icon ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  return (
    <div
      className={
        "card mb-2 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge text-bg-secondary me-1">
              {props.ativ.id}
            </span>
            - {props.ativ.titulo}
          </h5>
          <h6>
            Prioridade:
            <span
              className={"ms-1 text-" + prioridadeStyle(props.ativ.prioridade)}
            >
              <i
                className={
                  "me-1 fa-regular fa-face-" +
                  prioridadeStyle(props.ativ.prioridade, true)
                }
              ></i>
              {prioridadeLabel(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.ativ.descricao}</p>
        <div
          className="d-flex justify-content-end pt-2 m-0 border-top"
          onClick={() => props.pegarAtividade(props.ativ.id)}
        >
          <button className="btn btn-sm btn-outline-primary me-2">
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <btn
            className="btn btn-sm btn-outline-danger"
            onClick={() => props.deletarAtividade(props.ativ.id)}
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </btn>
        </div>
      </div>
    </div>
  );
}
