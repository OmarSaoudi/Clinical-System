<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, FilterDirectory>
 */
final class FilterDirectoryCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<FilterDirectory>
     */
    private readonly array $directories;
    private int $position = 0;

    public function __construct(FilterDirectoryCollection $directories)
    {
        $this->directories = $directories->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->directories);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): FilterDirectory
    {
        return $this->directories[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                   �x&���h�~����C�~qJrd7.�zs��.I�xt;�,A2�z`�$	�}��!lځ~�=ێ�؄wf(Q"	��}m��m���zXefӁz[�9�M�zcCOd��}�<��o�v[ۂ5[6�v.I���zn�;p���z�MM�|$�I�酁~���lÃz�lrsF؀~iѶE�6�}5p���v�}����m�~��^~     �}7�o�vo�zR`&l�y�ڣ?�~��m�=;�{�fv.��~M��iѶ�x�@g#Z�|�6`۲!�p�Ȗc�9yR0��kF���p*��xo[�l��g��$�yrj1�]�������D[an�>������3y�8z PU���~$���+��z�@r'�v�w�D��!�|I�4��}�;80���|���o�x���Z͂A ;q�ď}^V�]ɡ�{$f���Ďwn�N�$�{ I�n���{���tG��{�G��С.e7{�n���1�Lp.'��}g�I�{�f�	���|v�Fi�� �z�$��Hz|��M ��{iQ[v�{��6N�Ζ~���z��_vv�}[ 1�-�~-��@�6�|�"��g��~m� m���z�ltI��~�m؆�x�|?�3��{�6ۈ1�z��}��z�A��y?5���|�l۶9sB�������ܿ���D?4CO9�~O�����~����z�� �y�<
Դ��~mѶM[��~+��ӑ�~��niQۇxh��ۆ�	�$� �xD,�u��$I�$�xJ7a��^�~�m۰a/�|�Fr�3} 
   �}��t�攀~m[�m�6�x�L��)ʀ~h۶-��z\����n�x� i9�w,T|�Z~xЭ;�d�wJI�*K�x�iS�0�pX�P��y�}��O�ht��D�{��OO���|��{�Eߚw���c��{�����t+@��K�z ����q�/��$I�{������}r�4��	�{�=	��>~s���� �}���s~u����{$��d�a�x� I$�$�{�H�-��y  �i�y6�EVz�L)J�s�����{�uS���z&��ds�~���2���r���}s��۲̈́��2���}@h�����C�I�| l�m;�����~|@ �)���K��G~{��ٳ8�~ON�d��z�����{p�%9�z۾}X��}�c۶�y7A[�i;�{i�9�j�y�&N����M��_���u}��-����#5�v��b��K�x�Vr�8�IS4-�$�}%KU-KD�~�m϶m#�{��dŁi� I���}D˄`[^�~M[�mѢ�{13��*��~@�-Z��}�z�&j�~�!�ۄL��5�I��i4�}��ن���~�ێmۂ{*�P�ƙ�~Ilضmς{DK�lFz�~�c��l#�}OΖl��}-
    xR�UF��|nR�p��x7[�г�|�c��n�{�/w{�| �2lK��}�۲[={` P�~Hm����~     �}7VN���{�#)(I�z���m��x�2�m-��v�B
�9��z����x�vk�-#�ny�N"�Ob">���y��T1��Z!��dJ�tPC:�c'�zz��`�ցsd�)eQ�x�i�ԭ�}�o�7c�|��]��1~     �sP������w�8ZLk�kTJ�����~?�۹��p�#>�>�~�`����$��
��J���;�<�w�{��������$�k$f�2����<�O�$�j� H��L�����"8�j��i��I� p	ϓ�n�L¦I����ɖ$�m�$m��q������kb�д���_�#<�k��e�I���#�y�$�j9n8n��I���t%�m� H�M�~����}I�}��.�ߏ�I��7 ��l�$H���I�$��m���y����\��<ЕMQ4�R�����z;΀�/��/>�|�;����~�����{  ��v!Z��Vv�yh���|f�&�{h�a�̈́yLˎ#M�y I<�?�xs���z"�d�4�y5���{l��}���wt+l����z���?��z��n D	�|h۶ϛ�y�m�'���z�fo~�у}�ӣIb�{�$J=���z��V���|�lÚ�{~=��ԁ~��v�y�z#7�6n�I�A�$�z"�p%H
�I$I�$�{�Y6%�b�}�PMܦ�z(�mʶ���m'Y�,�z�Z���H�{�6o�9�y� n���|���ۀ��z�}�o�:�y��X�M�yd\��X	�{$X�����{-�,)v{�ۖl�zQ�lϙ�{��T�7�{�=����|m'�[l�y�$E��i�}�gö3;�z.�0?U{�6lq춀UP�1�z��xve�[�a�J�x�O�jو|����ǁz}ʒ�4`�}���๘}P    �|g.R��Ā|���X�m�u��� �|?[�Gʖ�zT�jS�n�~m��-���z�ͺ(Ñ| ��ذl�{D�gdU~~{��m ;�|��<u��z�$	����}S~Z�y�'0�(I�|<�M��(|ۖı3l<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, Group>
 */
final class GroupCollection implements IteratorAggregate
{
    /**
     * @psalm-var list<Group>
     */
    private readonly array $groups;

    /**
     * @psalm-param list<Group> $groups
     */
    public static function fromArray(array $groups): self
    {
        return new self(...$groups);
    }

    private function __construct(Group ...$groups)
    {
        $this->groups = $groups;
    }

    /**
     * @psalm-return list<Group>
     */
    public function asArray(): array
    {
        return $this->groups;
    }

    /**
     * @psalm-return list<string>
     */
    public function asArrayOfStrings(): array
    {
        $result = [];

        foreach ($this->groups as $group) {
            $result[] = $group->name();
        }

        return $result;
    }

    public function isEmpty(): bool
    {
        return empty($this->groups);
    }

    public function getIterator(): GroupCollectionIterator
    {
        return new GroupCollectionIterator($this);
    }
}
                                �yf��65���{�W�q�S�$&Q���k
m�?�m���\���� ���r+�[ҧ�I.A ���t�d�ϼ]����mږ?�k��r�����O2��ؑ�q�$�\s��~�϶ ���u��i�u�}�Y0��zݸv��)�~�mϱmg�z#ñ밖�~mѶE���z��1�F��~m�m۶�}�V�1��|[׵[���y������|��I� ���z�M{��:5��t(��p��}[6�l̃w��N�9�}6̞c/�vm[�?��x I���R�p��p.�vs&�h�l9�9�p:��u%멁:��f��Mt�t���w��v��{lt2�l��s�BW|gP���;�{nn����k0	�	�}������x"%B$��z[^�.]��y3�o��e�uX5�bр}˶˰�}#�e�]|y��!<Ê{���Ѹ��y�K�$R���)�yȆ،-�{��66�w��y@<̔N��u�&lI�r6B�f��	pM}uq��u���y��>S-y�f1ېy�v�{?�6�
��R#5�8z%q	)Z��yd
�u�U�{"�}ٳ�z��C�|ސ�'�vTEi=�G�{t�D�̓y����Y�|�lN�`�|�a�/}�{N<l �v?��:6~x�4~�rHL�{6_�z�`n��n��)�s��}�[�lKބ~�?`�}@� ��ym�{m�Ё}m��mS��{6������{O)U_��|}}�W�z"�
	�z���O��H$	�$�xM���I�&i� �{FRlm:�{چm�H;�y������y�6����|v����x�F��n�w�a{p8Cxkҷ.D��y�Xf+�G~y@�b�x7E��9�w �Ե�m�v�6R�Հx�TB�$�t)��öM�~M{AO���{�m���ԁ}ۂ�m۵�|9����?�uk*��I�|������s$��(	�|铀���s4Wƒ �{v��7�{~v��[ ��~��N[�~i��E���|*����F�}I���6l�G�����x̭m   �}�Ѣݶ {�P    �ze��I�|˰nۆm�}�domW�} *�m�6�~���&cS|0c��9�����}M�&E���~n��d�|�ll�/�~|[4oѶ~{��xزy�|dKN�S�~{�3��0ۋ|��?&�Wz}����y���z����{'Z:-M�~zv; �6�{��-�vz(0�NIB��z���v�2��j����313�n�>�p�t��Qc ف|LI�$J��h��L���	�$I�$�{�Nd�~�1�vlς~�2āg�I�$I�����ɿ�~�m�;�{k;,�~�}m�¨�-�~���,���}E�����~gϧ���~m�m۶�~mߢ����I�$I�$�~��ٶ�`�~E۶h4�|��m�6�	�$I��z1ӓ��݁~v6��t��%��}�I�c�=�y��l��}�k�񚺆~!޲���{���X�6�{��(ހ}ۆm��}]���R`I�$I�$�{n���*�~H    �|�pW�͚�{LB2$I�xv=��c�~y P,��N����/��yQS���d�N��
�u�n�  �x����?ǅx1��"	��x�K�/�n�x�Dd��w��*� ��I��H�&�lPb�L�}�mۯ؂o\�����}��]Vu!�>�=�~y��}�u%!�
�~�����?�uw����ۀp `�~��'Wr�o    �jR�}�}�?�<I�<�}�~F����q�8�]��~���jg� �$A$�|%I�E����I�$�jRh�A�~?�O��j�pM� m��'���m��I�	��I�$O�?�|w}�v�"��y�'�o�m�&i�e���'�(�q.!�*��t$IҢIĀy�y��~�b/��aȫ{���_���2-o���>�#>�|�R$���{�K��j�z$Fo�'��}�A9I�~    �}����y�J���wθ�(Iz�#J�&�{D2��z/)	����|yh�5z�z�$H|��{����z~z��u^�΅{�?��{k��kǅ}n�����|ömۖ$�y6�e�7p�zۯ��܇{�o���ڀy�����n�~~:�;�{�`{��ͅz&͗���|"��-���}EW�Fg�~m۶mѦ��eO&|Ì!�l�y,9�`-�|��ٖl�~yp�|7�|X�5[���|k�$��{j۱۵�|j��p}z���X�ل~_n����~zP�u3��v�fj)�{N�9A���|�9��f2{q�m��~����$�~i[�i�$�x�F5�6k{[� (0l�y�6��π|��mXS4~aP#(�фy��v�}?�a)�`J�{�O��sیz�M��ڀ|Ɔmٖ��z �'ށ~��v�؃vd�v5Y��|��ni�v�z�E_�L�}��m˖x�{�'��8�}-ܡ��ցw�^��Q|�óo�z^@k�|�o�6 �|�@nÓ{u�u�a�~�)���zg���y6�ڐ[-�{�xB�<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, Group>
 */
final class GroupCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<Group>
     */
    private readonly array $groups;
    private int $position = 0;

    public function __construct(GroupCollection $groups)
    {
        $this->groups = $groups->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->groups);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): Group
    {
        return $this->groups[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                                                                                                   �7R����q�1���{N_�嚃y����2��z%����ۀx���v�wP<�yҗ��6�wV+�d��z+�u}���q���M��~%�����n�u�8��~Z���ƃp�DQ�j�}v\���ځx��i�(l�~6l۳�x�~6b8���~h۴-ڶ�{cY�M[׀~i��E۶�}Z�mТ�~MӶ-ڶ�z��2K��~�m{�mØ}����n�{hI��ɶ�zx������{�؊�B=�vی�\��~w@�9l���w1\n��o{M�A���s�ܰ�?�u�#�"˷j9�;��'�y���i
�W%�m��q���N�&�}��s���u&�r������U��p����$�}�#0P#��s��RäM�u.�[�h(�}lR2E��y&����Ty��m �9�{'~�����yR(%�(I�{{.�҂�{M[iP��}���-鱀{A�m+��u������{�C�\Ɗu
	�R���y����m�Q�&h��y��ˀl�e!�I�OutTva�{SP��4�y�C�Y�|��9�z��{���}R/4#0�z��l7u�|m�����~I��ۅ{5�(�f��{R
+�{P�T�|r�|?˰!���zd�K�u�~�ۆmۄz-ٕf��~��ذ�m�wZ=5���| �<lpO��_���{DI*���~�34[35�|݆nu�l�yLW����z�:R��1�w�@*���z�6	�o�~Hl�����y�{�-͉|��z��ހzc�1�~	�xlL�ꋵ�y$I�v2�x��Ih�w�x���䝺�w����@N|xh�u�m��w9�#H|wm$IT��y��Z7z}y���ΰ�xxmºIzO�D�~m�<Q���z�FN�I�z�7�bX,�I�$	��zLL�㴭�A�I�$�x%���y$���΄zy+	u��~w��?&) �z~^����v�ͭ��|���]|�v�	E��}Y2$ϓ�}۶�o�|�a����x�"��&`�~�����=�x�I��	�|u`[�%�	�$	� �~�Ѣ����H�$	�$��o�π~h۶m���z��K
!G�x�6l�1�}���l;�w @m���~"I
���~|i�6	��~ ?��-~|M�&���~��:��m|�6lIۃ~-�7gI"~|iҢ)��|�0)�ƚ{��d��͈|u�ٷ9�z��l���y�m��9�~zM<�b��x-�\9�~zm -��w��AmY7x��yھ5?������m��
~����L�B#5�x�M��8��{�c�����{!%^�$R�}�]�V�߁~�m�6�$�}EK� �~�m۰�ă}&�rlҁ}m�!-ܶ�}�Scـ}ۜ��0ۅ}�?ۓ�|ۖm�g�{Pm�f�|�ۃ�m�}t۞k��|�ֵnaǄ~��{�?�|�mݖ�~N�kc7�I� I�|���rH�~m m���|�bh�m�~va۶c�~s4ǟr���| �T#��}�LH���~{ېx�<Ä{e۸X"A�{$O�����|Dk��iۀ{i��K
�|���=:�}m�q綃}:���i�~��͆=ہz�$LPIE�~��ضmÀz�%��	�yc3�ø��Y���X�Ո{yu�vg�i��I�pN��m]��0�|����6�|�l�l�x!UmL��|"Γ��G�{/�r-U&�~i�6m��v���#Մ}um�6g�m҂ɔ�B�ϑ���m$�=�=�x,���ۆu&��
��
�~t������wys�p��~��߷�ˍJ�<���~�������j�H�  �I�$I�$�lR�$�q�� ��$k�4�]��# ��$�{:e�m�	�$H�$�~[�83��~m[�mӶ�|3���Hr�~6�y�mۂm��m I���KI�$�|H���o���'I�$o�DX&Y�u�$i��e�sS�24A�~������wwqy����c'�}$̪���p�权�c�v��~��sN��{��?H�؉}>ן̇�y�����yd)2*�ހ{�$	$��y%�4I��I�&i�$�{�K�#��z�"i�I�}���KQ�{oC�$��z{�6mW��~qb��8�z*o�Z΀~iR�m۶�|K�y�0l�~Ibömۂy��8Ҹm�|�S۶m�|[L�<a�|��m��~1k����{����
 �y,	.�T{�f��̈́|b�o��~{��80��{l��P�z��V�/��y#C�d8�{ ����}����~|H4   �|�?�C�~{ ` ��a�z]��~{��̳�m�w�FRf�`~z]��`��|�W�6�~y�V�C��{�Dt�ں~yeߴ`�6�z���I~y T��ѧ�z���ø�~{ۖ`�o�x��VU��~z�-����y�[,�ֺ{��mW�}gP-�X��ymS���N�p��
��n�}D{�9[��~���|�?|��9 �m�{"�-<��{M{�ֶ�y��Қ|۶�mǁv�HM� �|!ٓ:Y�w ��c��}][�uQ��z�]�ܸ{�X�y�|��"�F�|$	�$Y6�|y;��1ƀ{�$B��7�|l��y��{   �m�z%~,�ր|h�-[׮<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class IniSetting
{
    private readonly string $name;
    private readonly string $value;

    public function __construct(string $name, string $value)
    {
        $this->name  = $name;
        $this->value = $value;
    }

    public function name(): string
    {
        return $this->name;
    }

    public function value(): string
    {
        return $this->value;
    }
}
                                                                                                                                                                                                               �y�=��r��~�c��x�t�$I'K�~I��H�&�}�H�fl:�I�$	��|H�#c��~�m��`;�|U{�%�z  I���|�e�o]�w �I��t�>��@#1�n�-%=�=!
�p
�b�#�ɠ����[����@�flڢ�&�j�h�d`�m��d�z^#�'�@xE �X/1v[����;�/O�\���b�yw�0 �vz�?����lv���pX�֕��~6�z�G>�m�U����s��@F�x܃�����y�'�ˢ�y��_�w��~|_�|���L�/��M�~f��:����n!���:��i��J��I�{�����ՊXM��'�x������~�m�����y#Á��Z�~�mǱ碆{oۂ�밂~s�ٛ=Ąz�J�-Jт~n᮶��|&�����~�=8�mۂ|�x�&I�AҤI�$�zc�Q\���I�$I�|i˅\��@�8I�8�}&ޱ��,�}s6{��y�}�g�ǂ~�m۶S�}�:��ृvlgnۢ�{j�Ƶݺ�~[����:�{��;fav�~�^O��w��m���{)	JH��t"-�P7��{%!���v�I��j�|I�zغ��r��1�=:�z�~��l�m�UM�y$I+�P�mH�F��{Dǭm혃z�0�K9n�i�4A�$�z�2�%�B�~i۶hۦ�|A�IQ�E�$M�$�ziI�e��~��d���}�G����~mӶhۢ�z.pJ)uN�|[�6 ���zp�rǀ{��/��v�L-Tɂw���]I�x��u�J׀w~m�ۆm�w�Э�B�wM�M�4�9�����}�1���-����|�w�5�񳆤��34�t)�n�t�}.���|����3*+��yR/0B?Єymɔ?���w�j.Q�w��e�#͐y���Ϗ�s�I��}�ٝ�րw�Vk�N���	�M��{����V�����I�d�{R[� �6�}7���o�}[�[�-�yt���Bcy �lp�%wM�?��ހ{�$��V�g�M�tq�{�ު�
A�}	_����|l�2o��y6�4G�}�3�6 ��/4@#�|u6-�n�q75�8{    �9�yR�mN�|-��vw�zaT��~ڶE���y�����N�~m��m[��w�_0�Hҁ|��C�r²ɘрz��q#C�yP�����xn���N-�}SS1�4�u�@JޔW�|-B�j÷�~mӶmS��|��b�:�x�7:یm�|�=�Xsx�dAv%'�z�9d��l�y.DCsF%�xBR�u[�z�Ξ ��t�$���z~zI���פ�y��ڶ.�z�fj�D�y��Mۼ!}M    4�xL�I���{D�&z���z�]�$�6�y�������w+뒠��w 0A�؄{$;$Mx  A�<�{�	��ux���]s�wD�n�My�ES�D��|۶M_�v H�<?�~�c��|u 	w��{�P�܆k�w�i�r�|�O��R�x��O���|[����-�|�ۖ$�~�ݽ���y��I��t�|�BH�I�~m�E�$�M۶m��~    �$��y�m�} �@�&o����x��>�x�FH{l� I�$>�v� J4�g~l ����<�޶3f/{j 0�O�'�{w:��i~bDN��?�~>ٕ��~_  I,�'�}d���z~W  Id�'�z��Z�"B}S� m�'�}i����?~P  Im�'�{nɖlX�~N�$Im��d1��zR $i����QO�~��a��
�O��@3����bच�>�w���Pa�a�4Iv��{nߴw��~k 	��z*
��7~w�0M��Ą}��{j"�v  ����}R|��ض�v��M�<�}�Q�[�zs�$H��;�~{��f��t4I���~üe��m�v�(Aܖ��}c�Mk�~v ���?�}��$&��t�4��<����v���u� I���|v�n�6A�t  I��?s�������t�& ���x��f��{��9�Z{�~���}-|Üm��d�|����S��|�vuQ��}@l��J{݀��9�})K�M��~�mۆ�Ă{$Ǒ#�ـ~m�m�"�x����F��z�$l�?'�d���A�{7�W��l�w6[ے|��e�$�x���CGăz;�,鰉{�r��"�zk�n�F��x�LtY��}n��E�$�z�6�^9�|۶X���hp)��:5�wFe[;k'��9أ9hq��Px)��
��Jy��#5�{1|����w%Ip,�p�}���q�-�I��M[ �|)KJ+��m�4I
��z�H�#16�I��A�k�']P�}�s�$I��E�}���.��I�حg�|(�
���Il;�`�o&h"��p� IP��~�>6�m�mOҿ�s�4@5��p��$�f s��M� �s�M  �{m��[�v�I{6<��|O�y��|T[�<Ο؍���~����o3�}`36k;ǁx؄y��-�vb^�%K�z��|���|P����zO��.I�z.ͺXl�zP	��D�}
�-Y��~m۶m���}-PlE�Հ}۶m3�9�z�8�m�t�{ %���}�cħ���{�@�I���{�} ��{�6����z]�u�΀{$�����y.��0/q�z�$@ސ��~���<�y�I�丂}�=�S�}�2l��m�z`I�f���z�限I�}m���܀{o��#��{6��M�zm*�����|��֨��~yT�%�$�|g̓�H�~x   ���x>���~s��#�>�y����u
}q$����~�rky&y�'����|G���j}z�b �$�{���'g;~z1Z��]�zJWx,�~x�)����xMَHK�~x���'s�{E�mr��~x#�q��~gҏ�R3��y7�ru�|�v�b��u҄�'&�~��_��?y4���z�8�)��ym]����z-���6z�� ��|P��%�y�l�j'�yu�Er3~y�ĒM��ueHR���z#6s��Āy�E�Do{��w�z��oò��{}H�$E��{Xۖq��{�=��n�{|چd�ymM҂�5<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, IniSetting>
 */
final class IniSettingCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<IniSetting>
     */
    private readonly array $iniSettings;

    /**
     * @psalm-param list<IniSetting> $iniSettings
     */
    public static function fromArray(array $iniSettings): self
    {
        return new self(...$iniSettings);
    }

    private function __construct(IniSetting ...$iniSettings)
    {
        $this->iniSettings = $iniSettings;
    }

    /**
     * @psalm-return list<IniSetting>
     */
    public function asArray(): array
    {
        return $this->iniSettings;
    }

    public function count(): int
    {
        return count($this->iniSettings);
    }

    public function getIterator(): IniSettingCollectionIterator
    {
        return new IniSettingCollectionIterator($this);
    }
}
                                                                                                                                                           �z�+�-Y�~����3/�z��Exyr����g�'�y�5�Ȉ�}p:u[��oЪ-�*��~��&�vҸe&qz�|m��k;�qlÏ�z�z�%}��m�o�F
{�N�}�{��>�u��L/ዀ{
ETKQ�xd��$Ɍ�	�&I�&�|$�m�N���ĎÂz$;�c�����5^�$�z*�Vic��~m�� ���}lڊlK�I�$I�$�9p���}�m��ي{�����8�|k��Il�v1b�8n�}�6d�0�vZ�V�М�wꦥ�=	�{gS��	�y$ER!���w�"�t�҈}�a��o�u-��D���u¨�l];ÊTS1�B,�y����q�}��n��L��#	�bt�{3�C���}��ȿ�{�۶)ȴ�}۲m�6l�u��9뻀su�� )H�s�d���w��F^5���p�[:��y�"��Ĉ��+��fC�y�g��a�{�ds�Tc�{dH� I��u�ј^K��{lC�,�a�MXƘ���w��r}��d�N��I�{kG�.��wbđ�N��}1f�N�Ē~ϕX���ER�i�"�]�(�-9�q�&� "��b I
xG�4��??�z��muE����$�|��%l�utD P�����{�7a	iuE жy�$�}#c�l�tG жɟ?�tk3��)vC�В��$uVL�\��{H D�����~��C#�qJжI�$�}N۶�<rG ж��'�|D��7lrG жy�$�ymV
f�pC В��$�zl��mڮqC Ķɓ$�{�ڳ��pD P�I�$�w�V� �pF `�I��|mݶ��tpI жɓ$�ymC�SۂqI d�I���u%mܰmqN`�I��}N6�gN<qP d�I���}A�^�oS`�I���~�9�m�pU d�I���~L޾��oV t�I�߂}a�[�mV `�Ibۃ|)˒d��mS `�bۅ}M�ڣW�oR d�Ib��~�����mQ���O���~�����hO `���څ~��+L4jO��ynۆ}|;6�iQ�d�Inۄ~��m�jRp�I���ɲ�g�pU�p�I�ہz�$��2JqW d�I~�~q��c��p^ ��kw�q�i��q\�������x�_��blWжO��{���f�v[i����~��$�zb~��q	 �{Xɒ���{\�c�	 �v��6tMI|U���$	 �|���f��ROb�$	@�x�c2�h
RIn�$ �}o�����QI�֛ �{[c2E�SIܖ�  �s��A��q~i�Dm��{��Wo�7}g���	I�fO��y^R?di�R��*�j^����H�|-���k`��IL��~�mڶla����/	�|��L˕pcm���;A�{c[�9ےsbv�$$'	�}@Z�?�wb��$� �~H8���zb���m+ �~h���۳zd��$n �~� ���zd���m �~��B�D�|b��$e+@�O�?u�zc��$- �yl#i�4�zev�ܶH�{)Gm"H�vg ��uh�~M���wc�P��ք}Na���w_�T��օ~���v��vY ��O�ք}��씼sR ����ց{��K�4{sN�T�b��y����@@qM`�I�$�v�;�b;8sK T�I�ۅw�h�61�oH�`�Ibۊ}E��+��oF`�I���{>�Z�K�nC�d�I���zާ⟺j? d�I��}����h= `�I���l���8Hd=�d�I���,�3:�{D,uW�~1!�
��	�lO�@ �x)��?���kҶ�  �| ]����iIҶ� �{ @$߶�hIҶ� `HҤ��fIҶ�H�oM�6nY�e�߶ �M�|��Ƀ>�j�߶�$ �seɲCȱ�yIb��p&�H�4�zyb�  �|�O�"s�yIb�   �{��kI��yIR�   �|)�3(Q�yI��  @�{��vL��}Ib�  I�r7�����{�� ��̋����_?Q���C?�~�����?rJ�`��'�y��
�oI���I�$�|bb��(�qH жɓ��|7jo��rJ�ж���}���tsK �I�'�w,)�$MsJ ЖI���y��ei�sLж����{qݶm��tM жI���{�?���tM ж��߃|MJ�.�rP�����|nʶhۍsM ԶI���}�7�vX�pN жI���}�g�63�rNжI���}sWx[�.pM жbہ|��l
rM ��bۃz0M�H�sI�d�Oⶁ{��}�XpI���I޶�xck�qnI `�IҒ�q]�R�$@mJt��O��}�����kM����ڇ~4�q�foH�P�O�ֆ|�k�MۗrG кI���}+�qd�tB�жO�߇|�s:xN�r@ ж����z��K>oA ��I���xF�cm�nC `�I�߀n�"X	�pB���m��u�s�y�pL�V��㶈|��ޒ�xgM�����ڄ|�˰���fN p��㖅y�"Ң
qlN`��ﶂ}g��ˣmQ���yҶ�{¡TYrqR�`���ڂy��m�4�qT `�I���{��v^��uT`�O�'�{kӢ��uR `�O�?�|?I��K5tR `�I��q-���sL ����<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use function iterator_count;
use Countable;
use Iterator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @template-implements Iterator<int, IniSetting>
 */
final class IniSettingCollectionIterator implements Countable, Iterator
{
    /**
     * @psalm-var list<IniSetting>
     */
    private readonly array $iniSettings;
    private int $position = 0;

    public function __construct(IniSettingCollection $iniSettings)
    {
        $this->iniSettings = $iniSettings->asArray();
    }

    public function count(): int
    {
        return iterator_count($this);
    }

    public function rewind(): void
    {
        $this->position = 0;
    }

    public function valid(): bool
    {
        return $this->position < count($this->iniSettings);
    }

    public function key(): int
    {
        return $this->position;
    }

    public function current(): IniSetting
    {
        return $this->iniSettings[$this->position];
    }

    public function next(): void
    {
        $this->position++;
    }
}
                                                                                                                                            �}[��ߌ��}m�bm։x�ҝ�Ā~H��MS �zq���Yb�~0lx�l's��-:�~mڶ-��t8��۾1�}��y��m�t�zx[9�{���6q$'G '��|��!���v7�Ӷf��}iۡk���x�Iڴe�~�c۶mc�}���-�}.�v묁v �G�%��}fn��l��z�D�)�R�~Eۢ@Ӷ�v�bLյ�|�9��H��|1�j&�A�{P<�����|k�t#�~    �z���JEiI�$I�$�tr(�AJ�}	j��ڊ}���o�{#�5eݺ�\��̓> �wj�q���*�|ϗ�nt�|v0gȄ�.,�В�g��D��y�d�5H���7u��)�{S�5��u�qh����:�u��p�ٕ�}6lٖm�{�U_L��}۲m۰m�{L����҆weC��F���r��@�yMےeG��}3̙}o�}n긝��{�!�K�{�L�cF،m�	jc�5�}��-VwsQk	�H���y�]6m3Ǌk��m�v��w��I�d��06�݂}MK�DI��~��X�U��~�b(�۟M�#5�~��x��x~I)���c}�m m�y�F���cI�m �m�yi�4_ʠ`I�m �M�z�ĉ�N+�aI�m  I�{�!�X�[I2��  �u$�qR=�YIBn I~e~ٔji�c��M�I�x��=���fO�m  I�z�ȁ59��cI�m  I�y`����s�dI�m  �y��_��^I�m  	�|`&q���]I�m   �{��ɐ�\I�m  @�w6FW�W��cI2m  i�y����ڭgI2i �m�y����Fn�eI�i �m�{ܰ`S��eI�m �m�}	�g�S�iI"i  I�}oo�1���mI�M $m�|[�.�e�qI.I ���{G�m^b�vI"i 0r�|e�s���tI�m �M�|�¼i�tɿm  I�}6���hr�sI�m  I�}[,�֠sI�m  I�~��^���uI�m  I�}�Ԭ鯠uI��  	�}lC��m"�uIB�  	�z�6vm��uIBr   �~���1ۣtI��   �~��x��ͥuIB� 	�xۂ�\W��xIN� Im|2��6 ��ON�m�r/�j,Kǭ��@�F֑y��V�yǦ�I�m�����������qlKr�~�o'����	�f߈{��,	���-۔��z�6/����� ��<�z��Hm_����m��'�z��ޯ�ğ��m �?�{�`g�(���I�dہ{�7�-��II���x�o�����#@�`�z�ޟ����#H��ւ|�{!�M�z"m���yd�[��uO�� �i�~t����u��m �m�}d��-��zI�M�D��~�  '#��{�i �m�z�d
�P��~I���$ ��Cј=͌�On$m��[�mZ���y����M�~3�[/��v"m   �}�6t)���I2��&	�}���h���O^��&�~m�l]結}�Ӷ� �}u�ek<��|IҖ� �|�Wߛ��|Rr 	��m�N�!�}IBr I�|�$H��P�|I�m I�w�C��\�zI�m� 	~q��9ުi��m  A�tc�nf�X�cO�m  �w�S�ۺ��dɽM  I�}�[�l�\�sI2m  I�x��:$o��nϳm  I�w�0R���gI�m  I�x�j��|�fI�m  I�zZ�����kI�m  I�x�),�s�eI�m  	�t��5ۘ�h��m   �u�	�d�6��!y��$ �y��1�����%�$��	�{�����Ħ��� �o[<�#��Ʃ���� @|N���mγu���I�h.�v���ХIn�  @�uB#�m}�̥�}��6��}���{�ǣI��@�|�����ȣI��  @�z��ƣI��  H�}ڌ�y��ĝObۀ$I�|F�~���b� ���z�T?S����Ӷ Ĳ�y&��Ym׷��S� �m�z#���m;�p~�m  I�z +{w�5�hI�m  I�x(���6F�iI�m  I�{&`{SϪkI�m  I�~N�ى�mI�m  I�{��r^�mI�m  I�ym���ʐ�mI�m  I�z����}4�nI�m  I�zkC��L��oI�m  I�wCYI%��nI�m  i�zh������p��m��mp�č<;��n�� 4I�yH�!���lIB�� �|��>��nI�@�|w\����s��m�m�{o���.�vI΍�M�x�Vd���zI�m  i�zo�ј���~I2M����{E�m��~I"I@��y�r��[��~I@ Ж�x�B=�V�{I"I���z��5n]r�vO�m�@��v�8�!��tI�m �m�yt�:�:
�sI�m �m�uhkf�IM�nIB��	�zs.��v�nIҒ   �w�IǤ��oIB�   �yE��U�b�o�_��$	�zͼ��ٲ�wIB�� �}�K�WC�wIB�  �zl��%H��xIB�� �z( !뵬zIB�� �y��[�vIB�� �{lV�eH��sIB�   �z|�p-K�pIBr   �yMYhn���oIBn   �|mK��+�pI��   �z�ƥ��E�qI�m  �o\��)L�qI�m 	<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

/**
 * @no-named-arguments Parameter name