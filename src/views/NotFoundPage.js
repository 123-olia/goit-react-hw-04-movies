import React from "react";
import { Link } from "react-router-dom";
import routes from "../services/routes";

const styles = {
  container: { textAlign: "center" },
  status: { fontSize: 100, marginBottom: 20 },
};

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.status}>404</h1>
    <p>
      Страница не найдена! Перейти на главную страницу можно по{" "}
      <Link to={routes.home}>ссылке</Link>.
    </p>
  </div>
);

export default NotFound;
