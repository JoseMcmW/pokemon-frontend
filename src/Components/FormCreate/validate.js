export const validate = (input) => {
  let errors = {};
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
  } else if (!/^[0-9]{1,2}$/.test(input.life)) {
    errors.life = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.attack) {
    errors.attack = "Ataque requerido.";
  } else if (!/^[0-9]{1,2}$/.test(input.attack)) {
    errors.attack = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.defense) {
    errors.defense = "Defensa Requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.defense)) {
    errors.defense = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.speed) {
    errors.speed = "Velocidad requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.speed)) {
    errors.speed = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.height) {
    errors.height = "Altura requerida.";
  } else if (!/^[0-9]{1,2}$/.test(input.height)) {
    errors.height = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.weight) {
    errors.weight = "Peso requerido.";
  } else if (!/^[0-9]{1,2}$/.test(input.weight)) {
    errors.weight = "Debe ser un valor entre el 0 - 99";
  }
  if (!input.types) {
    errors.types = "Debe tener al menos un tipo.";
  }
  return errors;
};

