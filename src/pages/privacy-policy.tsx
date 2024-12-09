import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const PrivacyPolicy = () => {
  return (
    <div className="space-y-12 max-w-screen-md mx-auto text-muted-foreground text-lg pb-16">
      <h1 className="text-4xl font-bold text-primary mb-12 pt-8">
        Política de Privacidade
      </h1>

      <section className="space-y-4">
        <p className="text-lg leading-relaxed">
          A SENTRY-X TECHNOLOGY LTDA., inscrita no CNPJ/MF sob o nº [CNPJ AQUI],
          com sede em [ENDEREÇO AQUI], única e exclusiva proprietária das marcas
          e dos domínios associados ao Site e ao Aplicativo doravante, em
          conjunto, denominados simplesmente "SENTRY-X", com o objetivo de
          fornecer aos Usuários uma visão transparente das práticas relacionadas
          à coleta, armazenamento e formas de uso de dados pela SENTRY-X
          apresenta a presente Política de Privacidade.
        </p>
      </section>

      <section className="bg-muted/30 p-6 rounded-lg space-y-4">
        <Alert>
          <AlertCircle className="h-5 w-5" />
          <AlertDescription>
            Ao se cadastrar na SENTRY-X, a Contratante estará efetivamente
            indicando a sua concordância com a Política de Privacidade e Termos
            de Uso. Sugerimos que a Contratante leia com atenção esse documento,
            bem como as suas eventuais atualizações.
          </AlertDescription>
        </Alert>
      </section>

      <section className="bg-muted/30 p-6 rounded-lg space-y-6">
        <h2 className="text-2xl font-medium text-primary">Canais de Contato</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            <span>Email: [EMAIL AQUI]</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-6 w-6 text-primary" />
            <span>Telefone: [TELEFONE AQUI]</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <span>Correspondência: [ENDEREÇO COMPLETO AQUI]</span>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          1. Introdução
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-4">
          <p className="text-lg">
            Esta Política de Privacidade divide os dados dos Usuários e da
            Contratante em algumas categorias:
          </p>
          <ul className="space-y-3">
            {[
              "Dados Pessoais do Usuário",
              "Dados da Contratante",
              "Dados Públicos",
              "e-CNPJ",
              "Documentos Fiscais Eletrônicos",
              "Dados Gerais",
              "Dados de Acesso",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          2. Quais Dados são Coletados?
        </h2>

        <div className="space-y-8">
          <div className="bg-muted/30 p-6 rounded-lg space-y-6">
            <h3 className="text-2xl font-medium text-primary">
              (a) Dados disponibilizados pela Contratante
            </h3>
            <p className="text-lg">
              Esses dados incluem todas as informações que a Contratante
              inseriu, de forma voluntária, na SENTRY-X, abrangendo:
            </p>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">
                (i) Dados Pessoais do Usuário
              </h4>
              <p>
                Quaisquer dados que identifiquem o Usuário como pessoa física,
                incluindo:
              </p>
              <ul className="space-y-2">
                {[
                  "Nome",
                  "Endereço de e-mail",
                  "Telefone",
                  "Outras informações de identificação pessoal",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">
                (ii) Dados da Contratante
              </h4>
              <p>Dados da empresa Contratante, incluindo:</p>
              <ul className="space-y-2">
                {[
                  "CNPJ",
                  "Endereço",
                  "Outras informações cadastrais da empresa",
                  "Informações necessárias para identificação e cadastro",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">(iii) e-CNPJ</h4>
              <p>Informações relativas ao certificado digital, incluindo:</p>
              <ul className="space-y-2">
                {[
                  "Login e senha de acesso ao certificado digital",
                  "Informações auxiliares para download",
                  "Dados para consulta e manifestação de documentos fiscais",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg space-y-6">
            <h3 className="text-2xl font-medium text-primary">
              (b) Dados coletados pela SENTRY-X
            </h3>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">
                (i) Documentos Fiscais Eletrônicos
              </h4>
              <p>Incluem:</p>
              <ul className="space-y-2">
                {[
                  "Notas fiscais eletrônicas (NFe)",
                  "Notas fiscais de serviços eletrônicos (NFSe)",
                  "Nota fiscal do consumidor eletrônica (NFCe)",
                  "Cupom fiscal eletrônico (SAT)",
                  "Conhecimento de transporte eletrônico (CTE)",
                  "Outros documentos fiscais eletrônicos",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">
                (ii) Dados Públicos
              </h4>
              <p>Dados coletados em bancos de dados públicos, incluindo:</p>
              <ul className="space-y-2">
                {[
                  "Dados da Receita Federal",
                  "Dados da Secretaria da Fazenda",
                  "Dados das Prefeituras",
                  "Outras fontes públicas oficiais",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-4">
              <h4 className="text-xl font-medium text-primary">
                (iii) Dados de Acesso e Uso
              </h4>
              <ul className="space-y-2">
                {[
                  "Navegador utilizado",
                  "Informações sobre tela e resolução",
                  "Endereço IP",
                  "Tempo médio de uso",
                  "Data e cidade de acesso",
                  "Modelo do dispositivo móvel",
                  "Sistema operacional",
                  "Provedor de conexão",
                  "Cookies",
                  "Registros de comunicação com a SENTRY-X",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          3. Como São Utilizados os Dados?
        </h2>

        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <h3 className="text-2xl font-medium text-primary">
            3.1. A SENTRY-X utilizará os Dados para:
          </h3>

          <article className="space-y-4">
            <h4 className="text-xl font-medium text-primary">
              (i) Funcionamento da Plataforma
            </h4>
            <ul className="space-y-2">
              {[
                "Alcançar o desempenho esperado",
                "Desenvolver e melhorar serviços",
                "Realizar estatísticas de utilização",
                "Resolver problemas técnicos",
                "Verificar proteção contra erros e fraudes",
                "Prestar atendimento ao cliente",
                "Verificar pagamentos e possibilidades de recuperação tributária",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-4">
            <h4 className="text-xl font-medium text-primary">
              (ii) Comunicações e Alertas
            </h4>
            <ul className="space-y-2">
              {[
                "Enviar notificações relevantes",
                "Comunicar alertas importantes",
                "Informar sobre novas funcionalidades",
                "Enviar lembretes de uso",
                "Compartilhar possibilidades de recuperação tributária",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="space-y-4">
            <h4 className="text-xl font-medium text-primary">
              (iii) Utilização do e-CNPJ
            </h4>
            <div className="space-y-4">
              <p>A SENTRY-X utilizará o e-CNPJ exclusivamente para:</p>
              <ul className="space-y-2">
                {[
                  "Download de documentos fiscais",
                  "Consulta de informações fiscais",
                  "Manifestação do destinatário",
                  "Cadastro em sistemas necessários para operação",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <h3 className="text-2xl font-medium text-primary">
            3.2. Anúncios e Publicidade
          </h3>

          <div className="space-y-4">
            <p>
              A SENTRY-X poderá utilizar dados de forma automatizada e
              codificada para:
            </p>
            <ul className="space-y-2">
              {[
                "Criar grupos de perfis anônimos",
                "Direcionar anúncios relevantes",
                "Melhorar a experiência do usuário",
                "Desenvolver novos serviços",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert className="mt-4">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              A SENTRY-X nunca compartilhará dados pessoais com anunciantes sem
              consentimento expresso do Usuário/Contratante.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          4. Bases Legais para o Tratamento
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-4">
          <ul className="space-y-3">
            {[
              "Execução da relação jurídica entre as partes",
              "Cumprimento de obrigação legal",
              "Exercício regular de direitos em processos",
              "Consentimento do titular dos dados",
              "Legítimo interesse da SENTRY-X",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          5. Compartilhamento dos Dados
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <p className="text-lg">
            A SENTRY-X compartilha dados apenas nas seguintes situações:
          </p>
          <ul className="space-y-3">
            {[
              "De forma anonimizada, sem possibilidade de identificação",
              "Com fornecedores de tecnologia necessários para operação",
              "Por requisição judicial ou administrativa",
              "Com expressa autorização do titular",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Lock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          6. Como Armazenamos as Informações
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              A SENTRY-X adota as seguintes medidas de segurança:
            </p>
            <ul className="space-y-3">
              {[
                "Criptografia de dados",
                "Servidores seguros próprios",
                "Controles de acesso rigorosos",
                "Monitoramento constante",
                "Backups regulares",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert>
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              Apesar dos melhores esforços em segurança, nenhum sistema é
              completamente imune a falhas. Ao usar a plataforma, o usuário
              compreende e aceita estes riscos.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          7. Direitos dos Titulares
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <h3 className="text-2xl font-medium text-primary">
            Os titulares podem exercer os seguintes direitos:
          </h3>
          <ul className="space-y-3">
            {[
              "Confirmar a existência de tratamento de dados",
              "Acessar seus dados",
              "Corrigir dados incompletos ou desatualizados",
              "Solicitar anonimização ou bloqueio de dados",
              "Solicitar portabilidade",
              "Solicitar eliminação dos dados pessoais",
              "Obter informações sobre compartilhamento",
              "Revogar consentimento",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <UserCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          8. Exclusão de Dados
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              Mediante solicitação de exclusão da Conta SENTRY-X:
            </p>
            <ul className="space-y-3">
              {[
                "Todos os dados pessoais serão apagados",
                "Dados restantes serão anonimizados",
                "Acesso à plataforma será desativado",
                "Dados não poderão ser recuperados",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert className="mt-4">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              A exclusão de dados resultará na desativação imediata da conta e
              perda permanente de acesso. Para voltar a usar a plataforma, será
              necessário criar uma nova conta.
            </AlertDescription>
          </Alert>

          <div className="space-y-4 mt-6">
            <h3 className="text-2xl font-medium text-primary">
              Exceções para Guarda de Dados
            </h3>
            <ul className="space-y-3">
              {[
                "Cumprimento de obrigações legais",
                "Ordens de autoridades públicas",
                "Requisitos regulatórios",
                "Defesa em processos judiciais ou administrativos",
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
          9. Transferência de Dados
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <h3 className="text-2xl font-medium text-primary">
            Situações de Compartilhamento com Terceiros:
          </h3>
          <div className="space-y-6">
            <article className="space-y-3">
              <h4 className="text-xl font-medium text-primary">
                (i) Novos Negócios
              </h4>
              <ul className="space-y-2">
                {[
                  "Processos de aquisição",
                  "Venda da empresa",
                  "Fusão ou reorganização societária",
                  "Mudança de controle",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-3">
              <h4 className="text-xl font-medium text-primary">
                (ii) Requisições Oficiais
              </h4>
              <ul className="space-y-2">
                {[
                  "Requisições judiciais",
                  "Requisições administrativas",
                  "Ordens de autoridades competentes",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-3">
              <h4 className="text-xl font-medium text-primary">
                (iii) Autorização do Usuário
              </h4>
              <p className="text-lg">
                Demais casos mediante notificação prévia e aprovação expressa do
                titular dos dados.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          10. Transferência Internacional
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-4">
          <p className="text-lg">
            Os dados poderão ser tratados por fornecedores localizados no Brasil
            ou no exterior, sempre com:
          </p>
          <ul className="space-y-3">
            {[
              "Garantias de segurança e sigilo",
              "Contratos específicos de proteção",
              "Conformidade com a LGPD",
              "Medidas técnicas adequadas",
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
          11. Responsabilidades do Usuário
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <div className="space-y-4">
            <p className="text-lg">O usuário é responsável por:</p>
            <ul className="space-y-3">
              {[
                "Manter suas credenciais de acesso seguras",
                "Não compartilhar login e senha",
                "Comunicar imediatamente qualquer suspeita de acesso não autorizado",
                "Alterar a senha em caso de suspeita de comprometimento",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert>
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              Em caso de suspeita de comprometimento da conta, entre em contato
              imediatamente através do email [EMAIL AQUI]
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-4xl font-semibold text-primary mb-6">
          12. Atualizações da Política
        </h2>
        <div className="bg-muted/30 p-6 rounded-lg space-y-6">
          <div className="space-y-4">
            <p className="text-lg">
              Esta política pode ser atualizada periodicamente, com os seguintes
              compromissos:
            </p>
            <ul className="space-y-3">
              {[
                "Avaliação regular das práticas de privacidade",
                "Adaptação às mudanças legislativas",
                "Notificação aos usuários sobre alterações",
                "Possibilidade de análise das mudanças antes da continuidade de uso",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert>
            <AlertCircle className="h-5 w-5" />
            <AlertDescription>
              O uso continuado da plataforma após as alterações implica na
              aceitação da nova versão da Política de Privacidade.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <footer className="mt-16 border-t pt-8 text-center space-y-4 text-base opacity-80">
        <p>
          Data da última atualização:{" "}
          <span className="font-medium text-primary">01/11/2024</span>
        </p>
        <p>
          Para mais informações ou dúvidas, entre em contato através do email{" "}
          <span className="text-primary font-medium">[EMAIL AQUI]</span> ou
          telefone{" "}
          <span className="text-primary font-medium">[TELEFONE AQUI]</span>.
        </p>
      </footer>
    </div>
  );
};
