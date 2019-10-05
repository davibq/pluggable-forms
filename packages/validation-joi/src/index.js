export default function validation() {
  const validate = (schema, data) => {
    const { value, error } = schema.validate(data);
    if (error) throw error;

    return value;
  };

  return {
    validate,
  };
}
