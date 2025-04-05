import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function main() {

    const numberOfApplications = 15;

    for(let i = 0; i < numberOfApplications; i++){
      const application = await prisma.applications.create({
        data:{
          courseId: faker.number.bigInt({ min: 1, max: 10 }),
          price: faker.number.int({ min: 1000, max: 10000 }),
        }
      })
      
      console.log(`Created: id:${application.id}, courseId:${application.courseId}, price:${application.price}`);
    }



    console.log('Seeding completed!');
}

main()
.catch(e => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
});
