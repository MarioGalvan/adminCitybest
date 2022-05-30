export const currentPassengers = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('PASSENGERS'));
  if (copyPermissions.indexOf("LIST_PASSENGERS") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_PASSENGERS")] =
      "Ver pasajeros";
  if (copyPermissions.indexOf("EDIT_PASSENGERS") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_PASSENGERS")] =
      "Editar pasajeros";
  if (copyPermissions.indexOf("BLOCK_PASSENGERS") !== -1)
    copyPermissions[copyPermissions.indexOf("BLOCK_PASSENGERS")] =
      "Bloquear pasajeros";
  if (copyPermissions.indexOf("DELETE_PASSENGERS") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_PASSENGERS")] =
      "Eliminar pasajeros";
  if (copyPermissions.indexOf("EXPORT_PASSENGERS") !== -1)
    copyPermissions[copyPermissions.indexOf("EXPORT_PASSENGERS")] =
      "Exportar pasajeros";

  return copyPermissions;
};

export const currentDrivers = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('DRIVERS'));
  if (copyPermissions.indexOf("LIST_DRIVERS") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_DRIVERS")] =
      "Ver conductores";
  if (copyPermissions.indexOf("EDIT_DRIVERS") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_DRIVERS")] =
      "Editar conductores";
  if (copyPermissions.indexOf("CHECK_DRIVER_DOCUMENTS") !== -1)
    copyPermissions[copyPermissions.indexOf("CHECK_DRIVER_DOCUMENTS")] =
      "Aprobar/rechazar documentos";
  if (copyPermissions.indexOf("BLOCK_DRIVERS") !== -1)
    copyPermissions[copyPermissions.indexOf("BLOCK_DRIVERS")] =
      "Bloquear conductores";
  if (copyPermissions.indexOf("DELETE_DRIVERS") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_DRIVERS")] =
      "Eliminar conductores";
  if (copyPermissions.indexOf("EXPORT_DRIVERS") !== -1)
    copyPermissions[copyPermissions.indexOf("EXPORT_DRIVERS")] =
      "Exportar conductores";

  return copyPermissions;
};

export const currentStatistics = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('STATS') && !permission.includes('CARBONFOOTPRINTS'));
  if (copyPermissions.indexOf("SEE_STATS") !== -1)
    copyPermissions[copyPermissions.indexOf("SEE_STATS")] = "Ver estadísticas";

  return copyPermissions;
};

export const currentCompanies = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('INSURANCE'));
  if (copyPermissions.indexOf("LIST_COMPANY_INSURANCE") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_COMPANY_INSURANCE")] =
      "Ver compañías aseguradoras";
  if (copyPermissions.indexOf("EDIT_COMPANY_INSURANCE") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_COMPANY_INSURANCE")] =
      "Editar compañías aseguradoras";
  if (copyPermissions.indexOf("CREATE_COMPANY_INSURANCE") !== -1)
    copyPermissions[copyPermissions.indexOf("CREATE_COMPANY_INSURANCE")] =
      "Crear compañías aseguradoras";
  if (copyPermissions.indexOf("DELETE_COMPANY_INSURANCE") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_COMPANY_INSURANCE")] =
      "Eliminar compañías aseguradoras";

  return copyPermissions;
};

export const currentBrands = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('BRAND'));
  if (copyPermissions.indexOf("LIST_CAR_BRAND") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_CAR_BRAND")] =
      "Ver marca de vehículos";
  if (copyPermissions.indexOf("EDIT_CAR_BRAND") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_CAR_BRAND")] =
      "Editar marca de vehículos";
  if (copyPermissions.indexOf("CREATE_CAR_BRAND") !== -1)
    copyPermissions[copyPermissions.indexOf("CREATE_CAR_BRAND")] =
      "Crear marca de vehículos";
  if (copyPermissions.indexOf("DELETE_CAR_BRAND") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_CAR_BRAND")] =
      "Eliminar marca de vehículos";

  return copyPermissions;
};

export const currentAdministration = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('ADMINS'));
  if (copyPermissions.indexOf("LIST_ADMINS") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_ADMINS")] =
      "Ver cuentas administradoras";
  if (copyPermissions.indexOf("EDIT_ADMINS") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_ADMINS")] =
      "Editar cuentas administradoras";
  if (copyPermissions.indexOf("CREATE_ADMINS") !== -1)
    copyPermissions[copyPermissions.indexOf("CREATE_ADMINS")] =
      "Crear cuentas administradoras";
  if (copyPermissions.indexOf("DELETE_ADMINS") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_ADMINS")] =
      "Eliminar cuentas administradoras";
  if (copyPermissions.indexOf("LIST_ADMIN_ROLES") !== -1)
    copyPermissions[copyPermissions.indexOf("LIST_ADMIN_ROLES")] =
      "Ver roles administrativos";
  if (copyPermissions.indexOf("EDIT_ADMIN_ROLES") !== -1)
    copyPermissions[copyPermissions.indexOf("EDIT_ADMIN_ROLES")] =
      "Editar roles administrativos";
  if (copyPermissions.indexOf("CREATE_ADMIN_ROLES") !== -1)
    copyPermissions[copyPermissions.indexOf("CREATE_ADMIN_ROLES")] =
      "Crear roles administrativos";
  if (copyPermissions.indexOf("DELETE_ADMIN_ROLES") !== -1)
    copyPermissions[copyPermissions.indexOf("DELETE_ADMIN_ROLES")] =
      "Eliminar roles administrativos";

  return copyPermissions;
};

export const currentCarbonFootPrints = (permissions) => {
  let copyPermissions = [...permissions];
  copyPermissions = copyPermissions.filter(permission => permission.includes('CARBONFOOTPRINTS'));
  if (copyPermissions.indexOf("SEE_STATS_CARBONFOOTPRINTS") !== -1)
    copyPermissions[copyPermissions.indexOf("SEE_STATS_CARBONFOOTPRINTS")] = "Estadísticas";
  
  return copyPermissions;
};