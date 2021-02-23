// DEPENDENCIES
import React from "react";
import { render, screen } from "../test-utils/customRender";
import { history } from '../utils/history';

// COMPONENTS
import { App } from "./App";

const props = {
  logged: false,
};

test('render without errors', async () => {
  render(<App {...props} />);
  expect(await screen.findByTestId('app-component')).toBeTruthy();
});

describe('checks the routes when the user is NOT logged`', () => {

  test('should render the login if logged is false', async () => {
    render(<App {...props} />);
    history.push("/login");
    expect(await screen.findByText('No es fútbol. Es LaLiga.')).toBeTruthy();
  });

  test('should not render the others routes if logged is false', async () => {
    render(<App {...props} />);
    history.push("/user?id=2");
    expect(screen.queryByText('Detalles del Usuario')).toBeNull();

    history.push("/users");
    expect(screen.queryByText('Listado de Usuarios')).toBeNull();
  });

});

describe('checks the routes when the user is logged`', () => {

  test('should not render the login if logged is true', async () => {
    render(<App {...props} logged={true} />);
    history.push("/login");
    expect(screen.queryByText('No es fútbol. Es LaLiga.')).toBeNull();
  });

  test('should render the others routes if logged is true', async () => {
    render(<App {...props} logged={true} />);
    history.push("/user?id=2");
    expect(await screen.findByText('Detalles del Usuario')).toBeTruthy();

    history.push("/users");
    expect(await screen.findByText('Listado de Usuarios')).toBeTruthy();
  });

});