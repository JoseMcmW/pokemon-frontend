export const validate = (input) => {
  let errors = {};
  const numValidation = /^(?:[1-9]|[1-9][0-9]|1[0-2][0-9]|130)$/;
  if (!input.name) {
    errors.name = "Nombre es requerido";
  } else if (!/^[a-zA-Z]{3,10}$/.test(input.name)) {
    errors.name = "Solo debe contener letras";
  }
  if (!input.image.includes(".jpg" || ".png")) {
    errors.image = "Contener una extensión correcta(.jpg, .png).";
  }
  if (!input.life) {
    errors.life = "Ataque requerido.";
  } else if (!numValidation.test(input.life)) {
    errors.life = "Debe ser un valor entre el 0 - 130";
  }
  if (!input.attack) {
    errors.attack = "Ataque requerido.";
  } else if (!numValidation.test(input.attack)) {
    errors.attack = "Debe ser un valor entre el 0 - 130";
  }
  if (!input.defense) {
    errors.defense = "Defensa Requerida.";
  } else if (!numValidation.test(input.defense)) {
    errors.defense = "Debe ser un valor entre el 0 - 130";
  }
  if (!input.speed) {
    errors.speed = "Velocidad requerida.";
  } else if (!numValidation.test(input.speed)) {
    errors.speed = "Debe ser un valor entre el 0 - 130";
  }
  if (!input.height) {
    errors.height = "Altura requerida.";
  } else if (!numValidation.test(input.height)) {
    errors.height = "Debe ser un valor entre el 0 - 130";
  }
  if (!input.weight) {
    errors.weight = "Peso requerido.";
  } else if (!numValidation.test(input.weight)) {
    errors.weight = "Debe ser un valor entre el 0 - 130";
  }
  if (input.types.length === 0) {
    errors.types = "Debe seleccionar al menos una opción de tipo.";
  }
  return errors;
};

