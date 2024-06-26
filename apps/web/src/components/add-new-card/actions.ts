'use server';

export const addCard = async (formData: FormData) => {
  const rawFormData = {
    cardType: formData.get('card-type'),
    nameOnCard: formData.get('name-on-card'),
  };
  console.log('Add card:', rawFormData);
};
