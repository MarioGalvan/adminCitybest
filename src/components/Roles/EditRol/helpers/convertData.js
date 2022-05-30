export const convertDataToEdit = (data) => {
  let copyPermissions = [...data];

  if (copyPermissions.indexOf("Ver pasajeros") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver pasajeros")] =
      "LIST_PASSENGERS";
  if (copyPermissions.indexOf("Editar pasajeros") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar pasajeros")] =
      "EDIT_PASSENGERS";
  if (copyPermissions.indexOf("Bloquear pasajeros") !== -1)
    copyPermissions[copyPermissions.indexOf("Bloquear pasajeros")] =
      "BLOCK_PASSENGERS";
  if (copyPermissions.indexOf("Eliminar pasajeros") !== -1)
    copyPermissions[copyPermissions.indexOf("Eliminar pasajeros")] =
      "DELETE_PASSENGERS";
  if (copyPermissions.indexOf("Exportar pasajeros") !== -1)
    copyPermissions[copyPermissions.indexOf("Exportar pasajeros")] =
      "EXPORT_PASSENGERS";

  if (copyPermissions.indexOf("Ver conductores") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver conductores")] =
      "LIST_DRIVERS";
  if (copyPermissions.indexOf("Editar conductores") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar conductores")] =
      "EDIT_DRIVERS";
  if (copyPermissions.indexOf("Aprobar/rechazar documentos") !== -1)
    copyPermissions[copyPermissions.indexOf("Aprobar/rechazar documentos")] =
      "CHECK_DRIVER_DOCUMENTS";
  if (copyPermissions.indexOf("Bloquear conductores") !== -1)
    copyPermissions[copyPermissions.indexOf("Bloquear conductores")] =
      "BLOCK_DRIVERS";
  if (copyPermissions.indexOf("Eliminar conductores") !== -1)
    copyPermissions[copyPermissions.indexOf("Eliminar conductores")] =
      "DELETE_DRIVERS";
  if (copyPermissions.indexOf("Exportar conductores") !== -1)
    copyPermissions[copyPermissions.indexOf("Exportar conductores")] =
      "EXPORT_DRIVERS";

  if (copyPermissions.indexOf("Ver estadísticas") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver estadísticas")] = "SEE_STATS";

  if (copyPermissions.indexOf("Ver compañías aseguradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver compañías aseguradoras")] =
      "LIST_COMPANY_INSURANCE";
  if (copyPermissions.indexOf("Editar compañías aseguradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar compañías aseguradoras")] =
      "EDIT_COMPANY_INSURANCE";
  if (copyPermissions.indexOf("Crear compañías aseguradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Crear compañías aseguradoras")] =
      "CREATE_COMPANY_INSURANCE";
  if (copyPermissions.indexOf("Eliminar compañías aseguradoras") !== -1)
    copyPermissions[
      copyPermissions.indexOf("Eliminar compañías aseguradoras")
    ] = "DELETE_COMPANY_INSURANCE";

  if (copyPermissions.indexOf("Ver marca de vehículos") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver marca de vehículos")] =
      "LIST_CAR_BRAND";
  if (copyPermissions.indexOf("Editar marca de vehículos") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar marca de vehículos")] =
      "EDIT_CAR_BRAND";
  if (copyPermissions.indexOf("Crear marca de vehículos") !== -1)
    copyPermissions[copyPermissions.indexOf("Crear marca de vehículos")] =
      "CREATE_CAR_BRAND";
  if (copyPermissions.indexOf("Eliminar marca de vehículos") !== -1)
    copyPermissions[copyPermissions.indexOf("Eliminar marca de vehículos")] =
      "DELETE_CAR_BRAND";

  if (copyPermissions.indexOf("Ver cuentas administradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver cuentas administradoras")] =
      "LIST_ADMINS";
  if (copyPermissions.indexOf("Editar cuentas administradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar cuentas administradoras")] =
      "EDIT_ADMINS";
  if (copyPermissions.indexOf("Crear cuentas administradoras") !== -1)
    copyPermissions[copyPermissions.indexOf("Crear cuentas administradoras")] =
      "CREATE_ADMINS";
  if (copyPermissions.indexOf("Eliminar cuentas administradoras") !== -1)
    copyPermissions[
      copyPermissions.indexOf("Eliminar cuentas administradoras")
    ] = "DELETE_ADMINS";
  if (copyPermissions.indexOf("Ver roles administrativos") !== -1)
    copyPermissions[copyPermissions.indexOf("Ver roles administrativos")] =
      "LIST_ADMIN_ROLES";
  if (copyPermissions.indexOf("Editar roles administrativos") !== -1)
    copyPermissions[copyPermissions.indexOf("Editar roles administrativos")] =
      "EDIT_ADMIN_ROLES";
  if (copyPermissions.indexOf("Crear roles administrativos") !== -1)
    copyPermissions[copyPermissions.indexOf("Crear roles administrativos")] =
      "CREATE_ADMIN_ROLES";
  if (copyPermissions.indexOf("Eliminar roles administrativos") !== -1)
    copyPermissions[copyPermissions.indexOf("Eliminar roles administrativos")] =
      "DELETE_ADMIN_ROLES";
  if (copyPermissions.indexOf("Estadísticas") !== -1)
    copyPermissions[copyPermissions.indexOf("Estadísticas")] =
      "SEE_STATS_CARBONFOOTPRINTS";

  return copyPermissions;
};
