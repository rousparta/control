
//accesorios
CREATE TABLE public.accesorios
(
  id integer NOT NULL DEFAULT nextval('accesorios_id_seq'::regclass),
  nombre character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT accesorios_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.accesorios
  OWNER TO postgres;
  
//cajas

CREATE TABLE public.cajas
(
  id integer NOT NULL DEFAULT nextval('cajas_id_seq'::regclass),
  descripcion character varying(255),
  cantidad integer,
  estado boolean,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "proveedorId" integer,
  "supervisorId" integer,
  "operadorId" integer,
  CONSTRAINT cajas_pkey PRIMARY KEY (id),
  CONSTRAINT "cajas_operadorId_fkey" FOREIGN KEY ("operadorId")
      REFERENCES public.usuarios (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT "cajas_proveedorId_fkey" FOREIGN KEY ("proveedorId")
      REFERENCES public.proveedors (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT "cajas_supervisorId_fkey" FOREIGN KEY ("supervisorId")
      REFERENCES public.usuarios (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.cajas
  OWNER TO postgres;

  
//control

CREATE TABLE public.controls
(
  id integer NOT NULL DEFAULT nextval('controls_id_seq'::regclass),
  "serie_batería" character varying(255),
  "voltaje_batería" numeric,
  "sensor_batería" numeric,
  "señal_RF" numeric,
  calidad_hardware boolean,
  calidad_software boolean,
  salida_cargador numeric,
  "Fecha_certificado" timestamp with time zone,
  estado boolean,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "dispositivoId" integer,
  CONSTRAINT controls_pkey PRIMARY KEY (id),
  CONSTRAINT "controls_dispositivoId_fkey" FOREIGN KEY ("dispositivoId")
      REFERENCES public.dispositivos (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.controls
  OWNER TO postgres;
  
 //dispositivoAcsesorio
 CREATE TABLE public."dispositivoAccesorios"
(
  id integer NOT NULL DEFAULT nextval('"dispositivoAccesorios_id_seq"'::regclass),
  estado character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "dispositivoId" integer,
  "accesorioId" integer,
  CONSTRAINT "dispositivoAccesorios_pkey" PRIMARY KEY (id),
  CONSTRAINT "dispositivoAccesorios_accesorioId_fkey" FOREIGN KEY ("accesorioId")
      REFERENCES public.accesorios (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT "dispositivoAccesorios_dispositivoId_fkey" FOREIGN KEY ("dispositivoId")
      REFERENCES public.dispositivos (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."dispositivoAccesorios"
  OWNER TO postgres;

 // Dispositivo
 CREATE TABLE public.dispositivos
(
  id integer NOT NULL DEFAULT nextval('dispositivos_id_seq'::regclass),
  imei integer,
  codigob character varying(255),
  color character varying(255),
  peso character varying(255),
  nro integer,
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "cajaId" integer,
  "modeloId" integer,
  CONSTRAINT dispositivos_pkey PRIMARY KEY (id),
  CONSTRAINT "dispositivos_cajaId_fkey" FOREIGN KEY ("cajaId")
      REFERENCES public.cajas (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT "dispositivos_modeloId_fkey" FOREIGN KEY ("modeloId")
      REFERENCES public.modelos (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.dispositivos
  OWNER TO postgres;

  //modelos
  
  CREATE TABLE public.modelos
(
  id integer NOT NULL DEFAULT nextval('modelos_id_seq'::regclass),
  nombre character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT modelos_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.modelos
  OWNER TO postgres;
  
 //modelos
 
 CREATE TABLE public.modelos
(
  id integer NOT NULL DEFAULT nextval('modelos_id_seq'::regclass),
  nombre character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT modelos_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.modelos
  OWNER TO postgres;
  
  //proveedores
  
  CREATE TABLE public.proveedors
(
  id integer NOT NULL DEFAULT nextval('proveedors_id_seq'::regclass),
  razon_social character varying(255),
  nit integer,
  num_formulario integer,
  nombre_comercial character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "usuarioId" integer,
  CONSTRAINT proveedors_pkey PRIMARY KEY (id),
  CONSTRAINT "proveedors_usuarioId_fkey" FOREIGN KEY ("usuarioId")
      REFERENCES public.usuarios (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.proveedors
  OWNER TO postgres;

  
  //rol
  
  CREATE TABLE public.rols
(
  id integer NOT NULL DEFAULT nextval('rols_id_seq'::regclass),
  tipo character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT rols_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.rols
  OWNER TO postgres;

 //tipoEcajas
 
 CREATE TABLE public."tipoEcajas"
(
  id integer NOT NULL DEFAULT nextval('"tipoEcajas_id_seq"'::regclass),
  tipo character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "cajaId" integer,
  "tipoEstadoId" integer,
  CONSTRAINT "tipoEcajas_pkey" PRIMARY KEY (id),
  CONSTRAINT "tipoEcajas_cajaId_fkey" FOREIGN KEY ("cajaId")
      REFERENCES public.cajas (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE,
  CONSTRAINT "tipoEcajas_tipoEstadoId_fkey" FOREIGN KEY ("tipoEstadoId")
      REFERENCES public."tipoEstados" (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."tipoEcajas"
  OWNER TO postgres;

  //tipoEstados
  
  CREATE TABLE public."tipoEstados"
(
  id integer NOT NULL DEFAULT nextval('"tipoEstados_id_seq"'::regclass),
  nombre character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  CONSTRAINT "tipoEstados_pkey" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public."tipoEstados"
  OWNER TO postgres;

 //usuarios
 
 CREATE TABLE public.usuarios
(
  id integer NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass),
  nombre character varying(255),
  "apellidoP" character varying(255),
  "apellidoM" character varying(255),
  "nombreUsuario" character varying(255),
  "contraseña" character varying(255),
  "createdAt" timestamp with time zone NOT NULL,
  "updatedAt" timestamp with time zone NOT NULL,
  "rolId" integer,
  CONSTRAINT usuarios_pkey PRIMARY KEY (id),
  CONSTRAINT "usuarios_rolId_fkey" FOREIGN KEY ("rolId")
      REFERENCES public.rols (id) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE CASCADE
)
WITH (
  OIDS=FALSE
);
ALTER TABLE public.usuarios
  OWNER TO postgres;

  
 
