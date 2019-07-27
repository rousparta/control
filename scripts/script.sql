CREATE TABLE modelo
(
  id serial PRIMARY KEY NOT NULL,
  nombre character varying(255)
);

CREATE TABLE accesorio
(
  id serial PRIMARY KEY NOT NULL,
  nombre character varying(255)
);

CREATE TABLE tipoEstado
(
  id serial PRIMARY KEY NOT NULL,
  nombre character varying(255)
);

CREATE TABLE rol
(
  id serial PRIMARY KEY NOT NULL,
  tipo character varying(255)
);

CREATE TABLE usuario
(
  id serial PRIMARY KEY NOT NULL,
  nombre character varying(255),
  apellidoP character varying(255),
  apellidoM character varying(255),
  nombreUsuario character varying(255),
  contraseña character varying(255),
  rolId integer,
  CONSTRAINT usuarios_rolId_fkey FOREIGN KEY (rolId)
      REFERENCES rol (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE proveedor
(
  id serial PRIMARY KEY NOT NULL,
  razon_social character varying(255),
  nit integer,
  num_formulario integer,
  nombre_comercial character varying(255),
  usuarioId integer,
  CONSTRAINT proveedor_usuarioId_fkey FOREIGN KEY (usuarioId)
      REFERENCES usuario (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE caja
(
  id serial PRIMARY KEY NOT NULL,
  descripcion character varying(255),
  cantidad integer,
  estado boolean,
  proveedorId integer,
  supervisorId integer,
  operadorId integer,
  CONSTRAINT caja_operadorId_fkey FOREIGN KEY (operadorId)
      REFERENCES usuario (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT caja_proveedorId_fkey FOREIGN KEY (proveedorId)
      REFERENCES proveedor (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT caja_supervisorId_fkey FOREIGN KEY (supervisorId)
      REFERENCES usuario (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE dispositivo
(
  id serial PRIMARY KEY NOT NULL,
  imei integer,
  codigob character varying(255),
  peso character varying(255),
  numero integer,
  cajaId integer,
  modeloId integer,
  CONSTRAINT dispositivo_cajaId_fkey FOREIGN KEY (cajaId)
      REFERENCES caja (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT modeloId_fkey FOREIGN KEY (modeloId)
      REFERENCES modelo (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE control
(
  id serial PRIMARY KEY NOT NULL,
  serie_bateria character varying(255),
  voltaje_bateria numeric,
  sensor_bateria numeric,
  senal_RF numeric,
  calidad_hardware boolean,
  calidad_software boolean,
  salida_cargador numeric,
  fecha_certificado timestamp with time zone,
  estado boolean,
  dispositivoId integer,
  CONSTRAINT control_dispositivoId_fkey FOREIGN KEY (dispositivoId)
      REFERENCES dispositivo (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE dispositivoAccesorio
(
  id serial PRIMARY KEY NOT NULL,
  estado character varying(255),
  dispositivoId integer,
  accesorioId integer,
  CONSTRAINT dispositivoAccesorio_accesorioId_fkey FOREIGN KEY (accesorioId)
      REFERENCES accesorio (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT dispositivoAccesorio_dispositivoId_fkey FOREIGN KEY (dispositivoId)
      REFERENCES dispositivo (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);

CREATE TABLE tipoEcaja
(
  id serial PRIMARY KEY NOT NULL,
  tipo character varying(255),
  cajaId integer,
  tipoEstadoId integer,
  CONSTRAINT tipoEcaja_cajaId_fkey FOREIGN KEY (cajaId)
      REFERENCES caja (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT tipoEcaja_tipoEstadoId_fkey FOREIGN KEY (tipoEstadoId)
      REFERENCES tipoEstado (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
);