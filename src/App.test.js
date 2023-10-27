import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import WebSocket from "jest-websocket-mock";

let server;

beforeEach(() => {
  server = new WebSocket("ws://localhost:4000"); // Replace with your WebSocket URL
  render(<App />);
});

afterEach(() => {
  WebSocket.clean();
  server.close();
});

// UI Test
test("renders Emergency Button component", () => {
  const emergencyButton = screen.getByText("Emergency Stop");
  expect(emergencyButton).toBeInTheDocument();
});

test("renders Pick Up Button component", () => {
  const pickUpButton = screen.getByText("Pick Up");
  expect(pickUpButton).toBeInTheDocument();
});

test("renders Drop Off Button component", () => {
  const dropOffButton = screen.getByText("Drop Off");
  expect(dropOffButton).toBeInTheDocument();
});

test("renders Main Panel component", () => {
  const mainPanel = screen.getByTestId("main-panel");
  expect(mainPanel).toBeInTheDocument();
});

test("renders Lock Button component", () => {
  const lockButton = screen.getByTestId("lock-btn");
  expect(lockButton).toBeInTheDocument();
});

// Frontend to Server check

test("sends a 'emergency' command to the server", () => {
  const emergencyButton = screen.getByText("Emergency Stop");
  fireEvent.click(emergencyButton);
  expect(server).toReceiveMessage('{"command":"emergencyOn"}');
});

test("sends a 'toggleLock' command to the server", () => {
  const lockButton = screen.getByText("Press to lock the robot");
  fireEvent.click(lockButton);
  expect(server).toReceiveMessage('{"command":"toggleLock"}');
});

test("sends a 'pickUp' command to the server", () => {
  const pickUpButton = screen.getByText("Pick Up");
  fireEvent.click(pickUpButton);
  expect(server).toReceiveMessage('{"command":"pickUp"}');
});

test("sends a 'dropOff' command to the server", () => {
  const dropOffButton = screen.getByText("Pick Up");
  fireEvent.click(dropOffButton);
  expect(server).toReceiveMessage('{"command":"dropOff"}');
});

test("sends a 'speedUp' command to the server", () => {
  const speedUpButton = screen.getByTestId("speed-up-btn");
  fireEvent.click(speedUpButton);
  expect(server).toReceiveMessage('{"command":"speedUp"}');
});

test("sends a 'slowDown' command to the server", () => {
  const slowDownButton = screen.getByTestId("slow-down-btn");
  fireEvent.click(slowDownButton);
  expect(server).toReceiveMessage('{"command":"slowDown"}');
});
