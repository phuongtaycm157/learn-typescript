interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
  }
  
  const tay: Person = {
    name: "Tay",
    age: 22,
    speak(lang: string): void {
      console.log(lang);
    },
    spend(amt: number): number {
      return amt;
    },
  };
  
  