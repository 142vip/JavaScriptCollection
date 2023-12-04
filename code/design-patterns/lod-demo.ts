/**
 * 迪米特法则Demo
 * 又叫最小知道原则
 */
namespace LodDemo {
  class Person {
    private readonly name: string

    constructor(name: string) {
      this.name = name
    }

    getName(): string {
      return this.name
    }
  }

  class Team {
    private readonly members: Person[]

    constructor() {
      this.members = []
    }

    addMember(member: Person): void {
      this.members.push(member)
    }

    printTeamMembers(): void {
      for (const member of this.members) {
        console.log(member.getName())
      }
    }
  }

  // 使用示例
  const john = new Person('John')
  const jane = new Person('Jane')
  const team = new Team()

  team.addMember(john)
  team.addMember(jane)

  team.printTeamMembers()
}
