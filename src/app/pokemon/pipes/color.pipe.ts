import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(type: string): string {
    switch (type.toLowerCase()) {
      case 'grass':
        return 'green-500';
      case 'fire':
        return 'red-500';
      case 'water':
        return 'blue-500';
      case 'bug':
        return 'brown-500';
      case 'normal':
        return 'gray-500';
      case 'poison':
        return 'purple-500';
      case 'electric':
        return 'yellow-500';
      case 'ground':
        return 'orange-500';
      case 'fairy':
        return 'pink-500';
      case 'fighting':
        return  'brown-500';
      case 'psychic':
        return 'pink-500';
      case 'rock':
        return 'brown-500';
      case 'steel':
        return 'gray-500';
      case 'ice':
        return 'light-blue-500';
      case 'ghost':
        return 'purple-500';
      case 'dragon':
        return 'purple-500';
      default:
        return 'black';
    }
  }

}
