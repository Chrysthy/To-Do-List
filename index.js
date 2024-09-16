const { select, input } = require('@inquirer/prompts')

let meta = {

    value: "Tomar 3 litros de água por dia",
    checked: false,


}

let metas = [meta]

const cadastrarMeta = async () => {

    const meta = await input({ menssage: "Digite a meta:" })

    if (meta.length == 0) {

        console.log("A meta não pode ser vazia.");

        return //cadastrarMeta() caso queira que deixar "preso" até cadastrar uma meta

    }

    metas.push({ value: meta, checked: false })
}

const start = async () => {

    while (true) {

        const opcao = await select({

            message: "Menu >",
            choices: [

                {
                    name: "Cadastrar Meta",
                    value: "cadastrar"
                },

                {
                    name: "Listar metas",
                    value: "listar"

                },

                {
                    name: "Sair",
                    value: "sair"
                }

            ],


        })

        switch (opcao) {

            case "cadastrar":

                await cadastrarMeta()

                console.log(metas);
                

                break

            case "listar":

                console.log("Vamos listar");

                break

            case "sair":

                console.log("Até a próxima!");

                return


        }
    }
}

start()