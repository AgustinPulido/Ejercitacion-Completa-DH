-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2020 a las 02:09:42
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `appproductos1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administradores`
--

CREATE TABLE `administradores` (
  `email` varchar(80) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAT` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `administradores`
--

INSERT INTO `administradores` (`email`, `nombre`, `apellido`, `contraseña`, `createdAt`, `updatedAT`) VALUES
('admin@gmail.com', 'Jesús', 'Arce', '$2b$12$uN7Ai3pgJxL6rdg/CKREMuvpRxB1tGzci8Lq3etHIgk2H1BIVuCuW', '2020-05-17 14:27:54', '2020-05-17 14:27:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `codigo` varchar(4) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `origen` varchar(100) NOT NULL,
  `email` varchar(80) NOT NULL,
  `stock` int(4) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`codigo`, `nombre`, `origen`, `email`, `stock`) VALUES
('0001', 'Memoria RAM', 'China', 'graphics@asus.com', 12),
('0002', 'Placa de video GTX1050', 'China', 'graphics@asus.com', 12),
('0003', 'Motorola Moto G7', 'EEUU', 'info@gmail.com', 12),
('9999', 'P5KPL-CM', 'China', 'graphics@asus.com', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(80) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellido` varchar(150) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `nombre`, `apellido`, `contraseña`, `avatar`, `createdAt`, `updatedAt`) VALUES
('ajax@gmail.com', 'Jhon', 'Ajax', '$2b$12$MnJfLFLIPM1b5M5vd3le6ebNpCGjT0q27v/N3ZqPiitCBSWYKbRxO', 'Jhon Ajax - 11-3-2020 13_23_30.png', '2020-05-17 14:27:51', '2020-05-17 14:27:51'),
('androide87@gmail.com', 'Androide', '87', '$2b$12$OdaJcXiN3Eo.JxRGUVg3euMpg6duMGYHMYVPFHBAvCbrFbPemNU72', 'Androide87 NroSerie2579 - 12-3-2020 0_16_21.png', '2020-05-17 14:27:52', '2020-05-17 14:27:52'),
('azul@gmail.com', 'Azulina', 'Tahka', '$2b$12$AyDyaHoNv9Ss/r.C0JsCte0gXw2o3joTTLoLaJVcHByUFsLQW6xDm', 'default.png', '2020-05-30 20:43:47', '2020-05-30 22:36:33'),
('brunito@gmail.com', 'Bruno', 'Marchetta', '$2b$12$uN7Ai3pgJxL6rdg/CKREMuvpRxB1tGzci8Lq3etHIgk2H1BIVuCuW', 'Bruno Marchetta - 11-3-2020 13_18_48.jpg', '2020-05-17 14:27:52', '2020-05-17 14:27:52'),
('donramon@gmail.com', 'Ramón', 'Valdez', '$2b$12$UzR0RV6gyKA0uFEBaIgAC./g5xdOGLltuc3bR7yQBUV4x.dEzT/4u', 'Ramón Valdez - 30-4-2020 17_32_43.jpg', '2020-05-30 20:32:43', '2020-05-30 20:32:43'),
('jesu@gmail.com', 'Jesu', 'Arce', '$2b$12$V6shUdaYIh/2fQijsiQyU.dmitGrOlmQBqVRlDX3Un9OSiJN3QXSa', 'Jesu Arce - 19-4-2020 17_3_38.jpg', '2020-05-19 17:03:38', '2020-05-19 17:03:38'),
('lunita@gmail.com', 'Luna', 'Marchetta', '$2b$12$fnSxqzZYVr3wl/zxojrbr.L8c63Hp2vKiQEN.X8SyQDVH/h5iwp.2', 'Luna Marchetta - 11-3-2020 13_18_20.jpg', '2020-05-17 14:27:53', '2020-05-17 14:27:53'),
('missy@gmail.com', 'Missy', 'Jhonson', '$2b$12$ivu3Y3amKmu7AYKVdZOileayAr.ecDoYI1zESCyVKMy34P2qTG5W.', 'Missy Jhonson - 11-3-2020 13_24_37.jpg', '2020-05-17 14:27:53', '2020-05-17 14:27:53'),
('pepe@gmail.com', 'Pepe', 'Argento', '$2b$12$qcMfE42huKGzKiq1MSfqu.LDEe2znIzQAvqyzNV5/SUi9nIkybc2.', 'Pepe Argento - 13-3-2020 20_11_27.jpg', '2020-05-17 14:27:53', '2020-05-17 14:27:53'),
('popi@gmail.com', 'Popi', 'Shawn', '$2b$12$PPW0p9IMx.6mpf1jPyOrDu8ZktONp.6QrcIemJtOMySbAmN.A.c1q', 'Popi Shawn - 13-3-2020 20_10_22.png', '2020-05-17 14:27:53', '2020-05-17 14:27:53'),
('seba@gmail.com', 'Sebastian', 'Yatra', '$2b$12$ZRjyA8nwb7rXT48ZBHHBNOjHDNdD7g/T/DWpgyKZSxOgNaNXOgz7.', 'Seba Yatra - 26-4-2020 21_21_56.jpg', '2020-05-17 14:27:54', '2020-05-17 14:27:54'),
('veggeta@gmail.com', 'Vegetta', 'Sayayin', '$2b$12$OuYW3i9BBzcsCRI0Xx8CnewV4PrV8oyBqbnDWKg./2L90UWRf9.JK', 'Vegetta Sayayin - 11-3-2020 13_22_36.png', '2020-05-17 14:27:52', '2020-05-17 14:27:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_producto`
--

CREATE TABLE `usuario_producto` (
  `id` int(11) NOT NULL,
  `id_usuario` varchar(80) NOT NULL,
  `id_producto` varchar(4) NOT NULL,
  `cantidad` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_producto`
--

INSERT INTO `usuario_producto` (`id`, `id_usuario`, `id_producto`, `cantidad`, `createdAt`) VALUES
(36, 'brunito@gmail.com', '0001', 1, '2020-05-17 14:27:54'),
(37, 'brunito@gmail.com', '0002', 5, '2020-05-17 14:27:54'),
(38, 'brunito@gmail.com', '0005', 2, '2020-05-17 14:27:54'),
(39, 'lunita@gmail.com', '0003', 1, '2020-05-17 14:27:54'),
(40, 'lunita@gmail.com', '0006', 4, '2020-05-17 14:27:54'),
(41, 'lunita@gmail.com', '0007', 2, '2020-05-17 14:27:54'),
(54, 'azul@gmail.com', '0001', 1, '2020-05-31 00:41:22'),
(55, 'azul@gmail.com', '0002', 1, '2020-05-31 00:41:27'),
(56, 'azul@gmail.com', '0003', 1, '2020-05-31 00:41:43'),
(57, 'brunito@gmail.com', '0003', 3, '2020-06-18 20:40:20');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administradores`
--
ALTER TABLE `administradores`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`codigo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `usuario_producto`
--
ALTER TABLE `usuario_producto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario_producto`
--
ALTER TABLE `usuario_producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
