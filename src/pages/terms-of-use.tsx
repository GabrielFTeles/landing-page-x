import { CheckCircle, ChevronRight } from "lucide-react";

export const TermsOfUse = () => {
  return (
    <div className="space-y-12 max-w-screen-md mx-auto text-muted-foreground text-lg pb-16">
      <h1 className="text-4xl font-bold text-primary mb-12 pt-8">
        Termos e Condições de Uso
      </h1>

      <section className="space-y-4">
        <p className="text-lg leading-relaxed">
          A SENTRY-X TECHNOLOGY LTDA., inscrita no CNPJ/MF sob o nº
          57.848.025/0001-67, com sede em R. Cornélio Benfica, 286, Nova Serrana
          - MG, é a proprietária e desenvolvedora das soluções tecnológicas
          oferecidas através de seu site e aplicativo, doravante denominados
          "Plataforma SENTRY-X" ou simplesmente "SENTRY-X".
        </p>
        <p className="text-lg leading-relaxed">
          Este documento estabelece os termos e condições para utilização de
          nossa Plataforma, sendo fundamental sua leitura e compreensão antes de
          iniciar o uso de nossos serviços.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          1. Definições Importantes
        </h2>
        <p className="text-xl mb-6">
          Para melhor compreensão deste documento, considere as seguintes
          definições:
        </p>

        <div className="space-y-8">
          <article className="bg-muted/30 p-6 rounded-lg space-y-3">
            <h3 className="text-2xl font-medium text-primary">
              1.1. Plataforma
            </h3>
            <p className="text-lg">
              Conjunto de soluções tecnológicas da SENTRY-X, incluindo site,
              aplicativo e software.
            </p>
          </article>

          <article className="bg-muted/30 p-6 rounded-lg space-y-3">
            <h3 className="text-2xl font-medium text-primary">1.2. Usuário</h3>
            <p className="text-lg">
              Pessoa física autorizada pela empresa contratante para acessar e
              utilizar a Plataforma.
            </p>
          </article>

          <article className="bg-muted/30 p-6 rounded-lg space-y-3">
            <h3 className="text-2xl font-medium text-primary">
              1.3. Contratante
            </h3>
            <p className="text-lg">
              Empresa que contrata os serviços da SENTRY-X.
            </p>
          </article>

          <article className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">1.4. Dados</h3>
            <p className="text-lg">Conjunto de informações que inclui:</p>
            <ul className="space-y-3">
              {[
                "Dados da empresa contratante",
                "Documentos fiscais eletrônicos",
                "Informações de usuários",
                "Certificados digitais",
                "Demais informações necessárias para operação",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-muted/30 p-6 rounded-lg space-y-3">
            <h3 className="text-2xl font-medium text-primary">
              1.5. Documentos Fiscais Eletrônicos
            </h3>
            <p className="text-lg">
              Incluem NFe, NFSe, NFCe, CTe e demais documentos fiscais em
              formato digital.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          2. Aceite dos Termos
        </h2>
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              2.1. Ao utilizar nossa Plataforma, você confirma que:
            </h3>
            <ul className="space-y-3">
              {[
                "Leu e compreendeu estes termos",
                "Possui autorização para representar a empresa contratante",
                "Concorda com todas as condições estabelecidas",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg bg-muted/30 p-4 rounded-lg">
            2.2. Caso tenha dúvidas, entre em contato conosco antes de aceitar
            os termos através do email contato@sentryx.com.br.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          3. Nossos Serviços
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              3.1. A SENTRY-X oferece uma plataforma tecnológica que permite:
            </h3>
            <ul className="space-y-3">
              {[
                "Gestão de documentos fiscais eletrônicos",
                "Análise e processamento de dados fiscais",
                "Geração de relatórios e insights",
                "Integração com sistemas governamentais",
                "Outras funcionalidades conforme plano contratado",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              3.2. Funcionalidades Principais:
            </h3>
            <ul className="space-y-3">
              {[
                "Download automatizado de documentos fiscais",
                "Validação e análise de dados",
                "Geração de relatórios gerenciais",
                "Interface com contadores e gestores",
                "Backup e armazenamento seguro",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          4. Responsabilidades
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              4.1. Da SENTRY-X:
            </h3>
            <ul className="space-y-3">
              {[
                "Disponibilizar a Plataforma conforme contratado",
                "Manter a segurança e integridade dos dados",
                "Fornecer suporte técnico",
                "Realizar atualizações e melhorias",
                "Garantir a confidencialidade das informações",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              4.2. Do Contratante:
            </h3>
            <ul className="space-y-3">
              {[
                "Fornecer informações verdadeiras e atualizadas",
                "Utilizar a Plataforma de forma adequada e legal",
                "Manter a segurança de suas credenciais de acesso",
                "Respeitar os limites do plano contratado",
                "Garantir o uso adequado por seus usuários autorizados",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          5. Proteção de Dados
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <p className="text-lg">
              5.1. Tratamos seus dados de acordo com a Lei Geral de Proteção de
              Dados (LGPD) e nossa Política de Privacidade.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              5.2. Seus dados serão utilizados apenas para:
            </h3>
            <ul className="space-y-3">
              {[
                "Prestação dos serviços contratados",
                "Melhorias na Plataforma",
                "Comunicações relevantes",
                "Cumprimento de obrigações legais",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          6. Planos e Pagamentos
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              6.1. Modalidades:
            </h3>
            <ul className="space-y-3">
              {[
                "Planos mensais",
                "Planos anuais",
                "Módulos adicionais conforme necessidade",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              6.2. Condições de Pagamento:
            </h3>
            <ul className="space-y-3">
              {[
                "Pagamento antecipado (pré-pago)",
                "Valores conforme plano escolhido",
                "Possibilidade de reajustes mediante aviso prévio",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              6.3. Em caso de atraso:
            </h3>
            <ul className="space-y-3">
              {[
                "Multa de 2% sobre o valor",
                "Juros de 1% ao mês",
                "Possibilidade de suspensão após 5 dias",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          7. Propriedade Intelectual
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              7.1. Todo o conteúdo da Plataforma é protegido por direitos
              autorais e propriedade intelectual, incluindo:
            </h3>
            <ul className="space-y-3">
              {[
                "Código-fonte",
                "Interface",
                "Textos e imagens",
                "Funcionalidades",
                "Marca e logotipos",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              7.2. É expressamente proibido:
            </h3>
            <ul className="space-y-3">
              {[
                "Copiar ou modificar o software",
                "Realizar engenharia reversa",
                "Sublicenciar ou revender",
                "Utilizar para fins não autorizados",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          8. Limitação de Responsabilidade
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-4">
          <h3 className="text-2xl font-medium text-primary">
            8.1. A SENTRY-X não se responsabiliza por:
          </h3>
          <ul className="space-y-3">
            {[
              "Decisões tomadas com base nos dados",
              "Problemas em sistemas governamentais",
              "Falhas de conexão do usuário",
              "Uso inadequado da Plataforma",
              "Informações incorretas fornecidas pelo contratante",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          9. Suporte e Comunicação
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              9.1. Canais de Atendimento:
            </h3>
            <ul className="space-y-3">
              {[
                "Email: contato@sentryx.com.br",
                "Telefone: +55 61 9868-0610",
                "Chat online (horário comercial)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-lg">
              9.2. Tempo de resposta conforme plano contratado
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          10. Vigência e Cancelamento
        </h2>
        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-lg">
              10.1. Este contrato tem vigência indeterminada
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-4">
            <h3 className="text-2xl font-medium text-primary">
              10.2. O cancelamento pode ser solicitado:
            </h3>
            <ul className="space-y-3">
              {[
                "A qualquer momento nos planos mensais",
                "Ao final do período nos planos anuais",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-lg">10.3. Não há devolução de valores pagos</p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          11. Disposições Finais
        </h2>
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-lg">
              11.1. Este termo pode ser atualizado periodicamente, sendo a nova
              versão comunicada através da Plataforma.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-lg">
              11.2. Em caso de dúvidas, prevalece a versão mais recente deste
              documento.
            </p>
          </div>
        </div>
      </section>

      <footer className="mt-16 border-t pt-8 text-center space-y-4 text-base opacity-80">
        <p>
          Data da última atualização:{" "}
          <span className="font-medium text-primary">01/11/2024</span>
        </p>
        <p>
          Para mais informações ou dúvidas, entre em contato através do email{" "}
          <span className="text-primary font-medium">
            contato@sentryx.com.br
          </span>{" "}
          ou telefone{" "}
          <span className="text-primary font-medium">+55 61 9868-0610</span>.
        </p>
      </footer>
    </div>
  );
};
